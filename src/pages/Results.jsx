import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton"

import { useLocation } from "react-router-dom"
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const Results = () => {
    const { user } = useUser();
    const location = useLocation();
    const { questions, answers, grades, history } = location.state;
    history[0].content = "You were an AI interviewer, you've asked the following question to the user and the user has answered as following. Now you should give an overall summary about how the user has performed and on what basis you have graded the user and how he can improve.";
    const [overview, setOverview] = useState('');
    // console.log(questions);
    // console.log(grades);
    // console.log(history);
    // console.log(answers);

    useEffect(() => {
        async function fetchOverview(input) {
            console.log(input);
            try {
                const response = await fetch(
                    API_URL + "/generate_overview",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(input),
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                var data = await response.json();
                data = data["reply"];
                console.log(data);
                setOverview(data[0]['generated_text']);
                console.log(overview);



            } catch (error) {
                console.error("Fetch error: ", error);
            }
        }
        const input = { input_message: history };
        fetchOverview(input);
    })

    return (
        <>
            <Navbar />
            <div className="w-full mt-[3rem] mb-[3rem] flex justify-center items-center">
                <Card style={{ position: 'relative' }} className='p-10 w-5/6 mb-[3rem]' >
                    <CardHeader>
                        <CardTitle className='flex flex-col items-center justify-center'>
                            <img src={user.imageUrl} className="rounded-full size-[7rem]"></img>
                            <p className="mt-5 ">{user.fullName}</p>
                        </CardTitle>
                    </CardHeader>
                    {/* <hr /> */}
                    <CardContent>
                        <div className="border-2 border-slate text-sm text-muted-foreground p-10 m-5">
                            {overview == '' ?

                                (
                                    <>
                                        <Skeleton className="h-8 w-[100%] m-5" />
                                        <Skeleton className="h-8 w-[100%] m-5" />
                                        <Skeleton className="h-8 w-[100%] m-5" />
                                        <Skeleton className="h-8 w-[100%] m-5" />
                                    </>
                                )
                                :
                                (
                                    <>
                                        {overview}
                                    </>
                                )


                            }
                        </div>
                        {
                            questions.map((question, index) => {
                                return (
                                    <div key={index} className='flex flex-col mb-4'>
                                        <div className="flex flex-row justify-between">
                                            <p className='text-sm font-bold w-[90%]'>Q. {question}</p>
                                            <p className="text-muted-foreground text-sm text-end">Grade: {grades[index]}</p>
                                        </div>
                                        <p className='text-sm w-[90%]'>A. {answers[index]}</p>
                                        {index != questions.length - 1 && (<hr />)}
                                    </div>
                                )
                            })
                        }
                    </CardContent>
                    <CardFooter className='h-[75px] flex flex-col  justify-end items-start '>
                        <div className='mb-2'>

                        </div>
                    </CardFooter>
                </Card>

            </div>
        </>

    )
}

export default Results

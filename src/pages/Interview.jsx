import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Interview = () => {
    const location = useLocation();
    const { title, jobDescription } = location.state || {};
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        console.log("hello")
        return null
    }
    const prompt = `You are an AI Interviewer, ask the user a question according to the following job description: ${jobDescription}, Restrict your replies to a single question, Grade each answer of the user on a scale of 1-10 on how accurate it is, if the user isn't able to answer properly then try asking other questions and grade it 0. All output must be in valid JSON. Output must be in valid JSON like the following example {"grade": 7, "next_question": "What frameworks have you worked on?"},{"grade": 7, "next_question": "What projects have you worked on?"}. Output must include only JSON with keys grade and next-question`;


    function extractJSONFromText(text) {
        var pattern = /{.*?}/;
        var match = text.match(pattern);
        if (match) {
            var jsonObject = match[0];
            return jsonObject;
        } else {
            return null;
        }
    }
    async function fetchQuestion(input) {
        console.log(input);
        try {
            const response = await fetch(
                "https://8a6e-104-197-174-107.ngrok-free.app/generate_response",
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

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }


    const [question, setQuestion] = useState('This is a sample question');
    const [answer, setAnswer] = useState('This is a samplq answer');

    const input_message = useRef([]);

    // useEffect( () => {
    //     async function fetchQuestionFirst(input) {
    //         console.log(input);
    //         try {
    //             const response = await fetch(
    //                 "https://8a6e-104-197-174-107.ngrok-free.app/generate_response",
    //                 {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify(input),
    //                 }
    //             );

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }

    //             var data = await response.json();
    //             console.log(data);
    //             data = JSON.parse(extractJSONFromText(data["reply"]));
    //             setQuestion(data["next_question"]);
    //             input_message.current.push({
    //                 role: "assistant",
    //                 content: data["next_question"],
    //             });


    //         } catch (error) {
    //             console.error("Fetch error: ", error);
    //         }
    //     }
    //     input_message.current.push({ role: "system", content: prompt });
    //     var input = { input_message: input_message.current };
    //     fetchQuestionFirst(input);



    // }, [])


    async function nextQuestion() {
        console.log("next question");
        input_message.push({ role: "user", content: ans });
        var input = { input_message: input_message };
        console.log(input);

        var response = await fetchQuestion(input);
        response = JSON.parse(response["reply"]);
        question.innerHTML = response["next_question"];
        input_message.push({
            role: "assistant",
            content: response["next_question"],
        });
        console.log(response["grade"]);
        grade += Number(response["grade"]);
    }




    const handleReset = () => {
        console.log("reset")
        console.log(transcript);
        resetTranscript()
    }

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    return (
        <>
            <Navbar />
            <div className='m-5 h-[95%]'>
                <div className='border-2 border-slate h-[90%] p-10'>

                    <div className='text-3xl font-bold'>
                        {title}
                    </div>
                    <div>
                        <div>
                            {question}
                        </div>
                        {transcript}

                    </div>
                    <div className='flex gap-3 mt-5'>
                        <button onClick={startListening}>Start Listening</button>
                        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Interview

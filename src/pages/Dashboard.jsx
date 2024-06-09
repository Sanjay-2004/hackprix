import React, { useEffect, useState } from 'react';
import BarChartComponent from '@/components/BarChartComponent';
import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router-dom';
import CardComponent2 from '@/components/CardComponent2';
import Navbar from '@/components/Navbar';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

const Dashboard = () => {

    const { isSignedIn, user, isLoaded } = useUser();

    if (isSignedIn) {
        // console.log(user.emailAddresses[0].emailAddress)
        // console.log(user.id);
        // console.log(user.fullName);

        console.log(`${import.meta.env.VITE_SERVER_URL}/api/user/`)
        const data = {
            userId: user.id,
            userEmail: user.emailAddresses[0].emailAddress,
            userName: user.fullName
        }
        console.log(data)
        try {
            const response = axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user`, data)
            console.log(response)
        } catch (error) {
            console.log("Error:", error)
        }
    }
    const [topicsShow, setTopicsShow] = useState(false);

    const dd = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita";

    const topics = [
        {
            title: "Custom Topic",
            description: "Upload Job Description and practice an in depth interview in that topic",
            nav: "custom"
        },
        {
            title: "Front-End Developer",
            description: "We are seeking a skilled Front-End Developer who is proficient in modern web technologies and frameworks. The ideal candidate will have a strong eye for design, a solid understanding of user experience principles, and the ability to translate UI/UX designs into code. You will work closely with our design and back-end teams to create responsive, intuitive, and visually appealing web applications.", tags: ["tag1", "tag2", "tag3"],
            nav: "frontend"
        },
        {
            title: "Back-End Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],
            nav: "backend"
        },
        {
            title: "Full-Stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],

            nav: "fullstack"
        },
        {
            title: "DevOps Engineer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],

            nav: "devops"
        },
        {
            title: "Software Tester",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],
            nav: "soft-test"
        },
        {
            title: "Project Manager",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],

            nav: "proj-man"
        },
        {
            title: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],
            nav: "ui-ux"
        },
        {
            title: "Product Manager",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],
            nav: "prod-man"
        },
        {
            title: "Marketing Specialist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem, dignissimos ? Molestias error cum incidunt quam eaque voluptate corrupti maiores vitae totam quae ? Officia, tenetur vel ? Nobis amet at, dolores dolore cupiditate non minima expedita", tags: ["tag1", "tag2", "tag3"],
            nav: "mark-spe"
        },
    ];

    const displayTopics = topics.slice(0, 7);

    return (
        <>
            <Navbar />
            <div className='grid grid-cols-4 gap-5 mx-12 my-8'>
                {!topicsShow ? (
                    displayTopics.map((topic, index) => {
                        const showD = topic.description.slice(0, 100);
                        return (
                            <Link key={index} to={topic.nav} state={{ title: topic.title, description: topic.description, tags: topic.tags }}>
                                <CardComponent key={index} title={topic.title} description={showD + "..."} tags={topic.tags} />
                            </Link>
                        )
                    }
                    )) : (
                    topics.map((topic, index) => {
                        const showD = topic.description.slice(0, 100);
                        return <CardComponent key={index} title={topic.title} description={showD + "..."} tags={topic.tags} />
                    })
                )}
                <div className='flex items-center justify-center w-full'><Button variant="outline" onClick={() => setTopicsShow((prev) => !prev)}>
                    {topicsShow ? "Show Less" : "Show More"}
                </Button></div>


            </div>
            <div className="flex justify-evenly gap-3 m-5 h-[513px]">
                <div className='w-[70%]'>
                    <BarChartComponent />
                </div>
                <div className='flex items-stretch w-[30%]' >
                    <CardComponent2 title="Card Title" description={dd} />
                </div>
            </div><Outlet />
        </>
    );
};

export default Dashboard;

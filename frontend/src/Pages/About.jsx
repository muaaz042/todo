import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from '../../constants/data'; // Make sure this path is correct
import Card from "../Components/Card.jsx";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/home");
            return;
        }
    }, [navigate]); // Add dependency array to useEffect

    return (
        <div className="grid grid-cols-1 gap-32 py-28 lg:px-40 md:px-24 sm:px-12 px-5 border-2 border-red-600">
            {data.map((d, i) => (
                <Card 
                    key={i} 
                    span={d.span} 
                    title={d.title} 
                    description={d.description} 
                    icon={d.icon}
                />
            ))}
        </div>
    );
};

export default About;

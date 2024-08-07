import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from '../../constants/data';
import Card from "../Components/Card.jsx";
import Footer from "../Components/Footer.jsx";

const About = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/home");
            return;
        }
    }, [navigate]);

    return (
        <div>
            <div className="grid grid-cols-1 gap-32 py-28 lg:px-40 md:px-24 sm:px-12 px-5">
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
            <Footer />
        </div>

    );
};

export default About;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          navigate("/home");
          return;
        }});


    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 h-[42rem]'>
            <div className='flex flex-col justify-center font-mono xl:p-8 lg:p-8 md:p-5 sm:p-5 p-4 xl:border-r-4 lg:border-r-4 md:border-r-4 
            xl:border-b-0 lg:border-b-0 md:border-b-0 border-b-4 border-blue-500 xl:my-20 lg:my-16 md:my-12 mx-5'>
                <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mt-5'>What this <span className='text-blue-400'>system</span> will do?</h1>
                <p className='mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16'>The To-Do List application is an intuitive tool designed to help users efficiently <span className='text-blue-400'>manage</span> their tasks by allowing them to add, view, and organize notes with a title and detailed description. Users can quickly <span className='text-blue-400'>add</span> new notes, <span className='text-blue-400'>search</span> for and <span className='text-blue-400'>filter</span> existing notes, and <span className='text-blue-400'>view</span> detailed information about each task. The user-friendly interface includes a main screen displaying all notes, an add note screen with input fields for title and description, and a view for editing or <span className='text-blue-400'>deleting</span> notes. This application simplifies task management, enhancing productivity and ensuring users stay on top of their responsibilities.</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg relative">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    width="90%"
                    id="blobSvg"
                    style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "rotate(0)",
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop
                                offset="0%"
                                style={{ stopColor: "rgb(0, 0, 0)" }}
                            ></stop>
                            <stop
                                offset="100%"
                                style={{ stopColor: "rgb(0, 0, 0)" }}
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
                        <animate
                            attributeName="d"
                            dur="9000ms"
                            repeatCount="indefinite"
                            values="
                    M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z;
                    M453.57191,328.53752Q437.08754,407.07503,364.57816,448.74386Q292.06878,490.41269,219.55628,459.1657Q147.04377,427.91871,108.99375,371.46874Q70.94372,315.01876,56.52814,244.52814Q42.11255,174.03752,86.02814,107.96874Q129.94372,41.89995,209.98749,31.84993Q290.03126,21.79991,346.01876,71.89683Q402.00625,121.99375,436.03126,185.99687Q470.05628,250,453.57191,328.53752Z;
                    M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;
                    M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;
                    M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z;
                    M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z
                  "
                        ></animate>
                    </path>
                </svg>
                <img src="./logo2.svg" alt="" className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] xl:h-72 xl:w-80 lg:h-64 lg:w-64 md:h-48 md:w-48 sm:h-64 h-36"/>
            </div>
            
        </div>
    )
}

export default About;
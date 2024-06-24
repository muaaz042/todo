import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GiNotebook } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';


const AddNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login');
        return;
    }


    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/note/addNote', { title, description }, {
                headers: { Authorization: `notes ${localStorage.getItem('token')}` }
            });
            console.log(res.status);
            navigate('/home');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div className='flex justify-center items-center h-[38rem]'>
            <div className='flex flex-col gap-8 lg:w-1/3 md:w-2/3 w-4/5 mx-5 border-2 border-blue-300 p-5 shadow-xl rounded-2xl'>
                <div className='flex justify-between sm:justify-center md:justify-between gap-5 items-center px-10 relative'>
                    <FaArrowLeft
                        onClick={() => {
                            navigate('/home')
                        }}
                        className='absolute left-0 text-xl hover:fill-blue-300' />
                    <div className='rounded-full border-2 border-blue-300 hover:bg-blue-300 flex justify-center items-center'>
                        <GiNotebook className='text-3xl m-4' />
                    </div>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-mono font-bold'>Add Note</h1>
                </div>
                <form className="w-full">
                    <div className="my-3">
                        <input
                            type="text"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            name='title'
                            className='outline-blue-800 border-2 text-black font-mono focus:border-background w-full p-2 rounded-md'
                            placeholder="Title"
                        />
                    </div>
                    <div className="my-3">
                        <textarea
                            type="text"
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            name='description'
                            className='outline-blue-800 border-2 text-black font-mono focus:border-background w-full p-2 rounded-md'
                            placeholder="Description"
                        />
                    </div>
                    <div className="flex items-center justify-center md:justify-start my-3">
                        <button
                            onClick={handleAdd}
                            className="text-center font-medium border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white outline-none border-2 w-full p-2 rounded-md">Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNote
import React, { useState, useEffect } from 'react';
import NoteCard from '../Components/NoteCard';
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/note/getNotes', {
          headers: { Authorization: `notes ${localStorage.getItem('token')}` }
        });
        console.log(res.data.notes);
        if (Array.isArray(res.data.notes)) {
          setNotes(res.data.notes);
        } else {
          console.error('Unexpected response format:', res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note._id !== id));
  };

  const colors = [
    'bg-green-300/40',
    'bg-purple-300/40',
    'bg-blue-300/40',
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div>
      <div className={`${getRandomColor()} w-full h-52 px-4 flex justify-center items-center gap-8 relative mb-10 shadow-lg`}>
        <p className='text-4xl '>click on <strong>+</strong> button to add note</p>
        <div className='rounded-full border-4 w-20 h-20 bg-blue-300 border-black hover:bg-green-300 flex justify-center items-center absolute -bottom-10'>
          <IoAddSharp
            onClick={() => {
              navigate('/addNote');
            }}
            className='text-5xl m-3' />
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly items-center px-10 py-8 gap-x-1 gap-y-5'>
        {Array.isArray(notes) && notes.map((note, index) => (
          <NoteCard key={index} bgColor={getRandomColor()} index={index + 1} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>

  );
};

export default Home;

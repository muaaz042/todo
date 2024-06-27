import React from 'react';
import { MdDelete, MdModeEdit } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ index, bgColor, note, onDelete }) => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:5000/note/deleteNote/${note._id}`, {
        headers: { Authorization: `notes ${localStorage.getItem('token')}` }
      });
      console.log(res.data.note);
      if (res.status === 200) {
        onDelete(note._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    navigate('/updateNote', { state: { note } });
  };

  return (
    <div className={`flex flex-col items-center justify-between p-5 gap-4 lg:w-2/4 md:w-3/4 w-full shadow-xl rounded-3xl ${bgColor}`}>
      <div className='flex justify-between items-center w-full flex-wrap'>
        <h1 className='font-mono text-3xl font-bold'>{index}. {note.title}</h1>
        <div className='flex items-center justify-center gap-3'>
          <div className='border-2 border-gray-500 rounded-xl cursor-pointer hover:scale-110'>
            <MdModeEdit onClick={handleEdit} className='fill-gray-500 m-1 text-3xl' />
          </div>
          <div className='border-2 border-red-500 rounded-xl cursor-pointer hover:scale-110'>
            <MdDelete onClick={handleDelete} className='fill-red-500 m-1 text-3xl' />
          </div>
        </div>
      </div>
      <p>{note.description}</p>
    </div>
  );
};

export default NoteCard;

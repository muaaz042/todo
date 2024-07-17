import React from 'react';
import { IoAddSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";

const data = [
    {
        span: 'Add',
        title: 'the notes',
        description: 'Welcome to our intuitive note-taking platform! Our user-friendly interface makes it effortless to organize your thoughts and ideas. Simply click on the back arrow to return to your previous screen or stay here to add a new note. With our sleek design, you can easily enter the title and description of your note in the provided fields. Once you are done, just hit the "Add Note" button to save it. Whether you are jotting down a quick reminder or drafting a detailed plan, our platform ensures that your notes are neatly organized and easily accessible. Experience seamless note-taking like never before!',
        icon: React.createElement(IoAddSharp)
    },
    {
        span: 'Get',
        title: 'your notes',
        description: 'Stay on top of your tasks with our efficient note retrieval feature! Our platform allows you to easily access all your saved notes in one place. With just a few clicks, you can view, edit, or delete any note, ensuring that your information is always up-to-date and organized. Whether you are searching for a quick reminder or a detailed plan, our user-friendly interface makes it simple to find exactly what you need. Enjoy the convenience of managing your notes effortlessly with our powerful and intuitive note retrieval system!',
        icon: React.createElement(GiNotebook)
    },
    {
        span: 'Update',
        title: 'your notes',
        description: 'Effortlessly update your notes with our seamless interface! Our platform offers a straightforward and user-friendly experience for editing existing notes. Navigate back to your previous screen using the back arrow, or stay here to make changes. Simply update the title and description in the provided fields, and click "Save Changes" to keep your note current. Our clean and minimalistic design ensures that editing notes is a breeze, allowing you to keep your information accurate and up-to-date. Experience the ease of managing your notes with our efficient and intuitive platform!',
        icon: React.createElement(GrUpdate)
    },
    {
        span: 'Delete',
        title: 'notes',
        description: 'Easily manage your notes with our intuitive delete function! Our platform features a straightforward interface for removing notes you no longer need. The delete icon, represented by a red trash can, allows you to quickly and efficiently declutter your notes. Simply click on the icon to remove unwanted notes from your collection. With our user-friendly design, keeping your notes organized and up-to-date has never been easier. Enjoy the simplicity and efficiency of managing your notes with our powerful note-taking platform!',
        icon: React.createElement(AiOutlineDelete)
    },
];

export default data;

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin:["https://todo-notes-nine.vercel.app"],
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials:true
}));

require('./Connection/Connection');

app.use('/auth', require('./Routes/UserRoutes'));
app.use('/note', require('./Routes/notesRoutes'));

app.listen(5000, () => {
    console.log('App is running');
});
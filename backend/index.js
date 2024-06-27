const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
require('./Connection/Connection');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));


app.use('/auth', require('./Routes/UserRoutes'));
app.use('/note', require('./Routes/notesRoutes'));

app.listen(5000, () => {
    console.log('App is running');
});
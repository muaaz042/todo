const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
require('./Connection/Connection');

const corsOptions = {
  origin: 'https://keep-your-notes.vercel.app',
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));


app.get('/',(req, res) => res.status(200).json({message: "App Deployed"}));

app.use('/auth', require('./Routes/UserRoutes'));
app.use('/note', require('./Routes/notesRoutes'));

app.listen(5174, () => {
  console.log('App is running');
});
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

require('./Connection/Connection');

app.use('/auth', require('./Routes/UserRoutes'));
app.use('/note', require('./Routes/notesRoutes'));

app.listen(5000, () => {
    console.log('App is running');
});
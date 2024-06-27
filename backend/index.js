const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const port = process.env.PORT || 5174;

require("./Connection/Connection.js");

const corsOptions = {
  origin: ["https://keep-your-notes.vercel.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/auth", require("./Routes/UserRoutes"));
app.use("/note", require("./Routes/notesRoutes"));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});

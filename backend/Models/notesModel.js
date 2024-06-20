const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
    title: { type: String },
    description: { type: String }
});

module.exports = new mongoose.model("Notes", notesSchema);


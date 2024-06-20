const router = require('express').Router();
const notesSchema = require('../Models/notesModel');
const { requireLogin } = require('../middleware/auth');

router.post('/addNote', requireLogin, async (req, res) => {
    const { title, description } = req.body;
    const userid = req.user._id;
    try {
        let note = new notesSchema({
            userid,
            title,
            description,
        });
        console.log(note);
        await note.save();
        return res.status(201).json({ message: 'Note Added Successfully' });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getNotes', requireLogin, async (req, res) => {
    try {
        let notes = await notesSchema.find({ userid: req.user._id });
        if (!notes || notes.length === 0) {
            return res.status(400).json({ error: 'Do not have any note.' });
        }
        return res.json({ notes });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put("/updateNote/:id", requireLogin, async (req, res) => {
    const id = req.params.id;

    const { title, description } = req.body;

    let data;

    try {
      data = await notesSchema.findByIdAndUpdate(id, {
        title,
        description
      });

      await data.save().then(() => {
        res.status(200).json({ message: "update successful" });
      });

    } catch (error) {
      console.log(error);
    }
  });

router.delete("/deleteNote/:id", requireLogin, async (req, res) => {
    const id = req.params.id;
    try {
      await notesSchema.findByIdAndDelete(id).then(() => {
    res.status(200).json({ message: "Deletion Success" });
      });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;

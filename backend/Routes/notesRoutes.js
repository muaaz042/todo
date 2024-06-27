const router = require('express').Router();
const notesSchema = require('../Models/notesModel.js');
const { requireLogin } = require('../middleware/auth.js');

router.post('/addNote', requireLogin, async (req, res) => {
    const { title, description } = req.body;
    const userid = req.user._id;
    try {
        let note = new notesSchema({
            userid,
            title,
            description,
        });
        await note.save();
        return res.status(201).json({ message: 'Note Added Successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getNotes', requireLogin, async (req, res) => {
  try {
      let note = await notesSchema.find({ userid: req.user._id });
      if(!note){
          return res.status(400).json({ error: 'Do not have any note.' });
      } 

      return res.json({ note });
  } catch (error) {
      console.log(error.message);
      return res.status(500).json({ error: 'Server error' });
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
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.delete("/deleteNote/:id", requireLogin, async (req, res) => {
    const id = req.params.id;
    try {
      await notesSchema.findByIdAndDelete(id).then(() => {
    res.status(200).json({ message: "Deletion Success" });
      });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;

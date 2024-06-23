const router = require('express').Router();
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require('../Models/UserModel');
const { requireLogin } = require('../middleware/auth');


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      let user = await userSchema.findOne({ email });
      if (user) {
        return res.status(400).json({ error: 'User Already Exist' });
      }
  
      const hashPass = await bcypt.hash(password, 10);
      user = new userSchema({
        name,
        email,
        password: hashPass,
        plainTextPassword: password
      });
      await user.save();
      return res.status(201).json({ message: 'User registered Successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

router.post('/login', async (req, res) => {
    const {email, password } = req.body;
    try {
        let user = await userSchema.findOne({email});
        if(!user){
            return res.status(400).json({error: 'User does not Exist'})
        }        
        const isCompare = await bcypt.compare(password, user.password);
        if(!isCompare){
            return res.status(400).json({error: 'Invalid Credentials'})
        }
        const token = jwt.sign({_id: user._id}, "notes", {expiresIn: '1h'});
        return res.json({token});

    } catch (error) {
        console.log(error.message);
    }
});


router.put("/updateUser", requireLogin, async (req, res) => {
    const id = req.user._id;

    const { name, email, plainTextPassword } = req.body;

    let data;
    const hashPass = await bcypt.hash(plainTextPassword, 10);

    try {
      data = await userSchema.findByIdAndUpdate(id, {
        name,
        email,
        password:hashPass,
        plainTextPassword
      });

      await data.save().then(() => {
        res.status(200).json({ message: "update successful" });
      });

    } catch (error) {
      console.log(error);
    }
  });


router.get('/', requireLogin, async (req, res) =>{
    try {
        const user = await userSchema.findById(req.user._id).select("-password -plainTextPassword");
        res.json(user);
    } catch (error) {
        console.log(error.message);
    }
})

router.get('/getUser', requireLogin, async (req, res) =>{
    try {
        const user = await userSchema.findById(req.user._id).select("-password");
        res.json(user);
    } catch (error) {
        console.log(error.message);
    }
})



module.exports = router;
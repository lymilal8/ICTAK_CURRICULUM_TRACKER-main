const express = require('express');
const router=express.Router();

const userData = require("../model/signUp");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


//Login api
router.post("/login",async(req,res)=>{
    let email=req.body.username;
    console.log(email);
    let password=req.body.password;
    console.log(password);
    const user= await userData.findOne({email: email});
    console.log(user); 
    if(!user){
        res.json({message:"user not found"})
    }
    try{
        if(user.password==password){
            res.json({message:"Login sucessfully"})
        }
        else
        {
            res.json({message:"invalid password"})
        }
    }
    catch(err){
        console.log(err)
    }
});


router.post("/signup",async(req,res)=>{
    let email = req.body.email;
    console.log(email);
    const user = await userData.findOne({ email: email });
    console.log(user);
    if (user) {
        res.json({ message: "Email ID Already Exists!" });
    } else {
        try {
            const item = req.body;
            const newUser = new userData(item); // Create a new instance of userData
            await newUser.save(); // Save the new user to the database
            res.json({ message: "Signup successfully" }); 
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error occurred while signing up" }); 
        }
    }
  
});

module.exports=router;
import mongoose from "mongoose";
import express, { response } from 'express';
import User from '../models/user.js'

const router = express.Router();

router.route("/").post(async (req, res) => {
    try {
        console.log("Entered Here");
        const {userEmail, userName, userID} = req.body;
        const user = await User.findOne({userID: userID});
        if(!user){
            await new User({userName,userEmail,userID}).save();
            return res.json({"status":"User created."}).status(201);
        }else return res.json({"status":"User found."}).status(200);
    } catch (error) {
        console.log(error);
        return res.json({"status":"There was a problem."}).status(500);
    }
})

router.route("/").get(async (req,res)=>{
    return res.json({"status":"Workisdfsfdsfsdng"}).status(200);
})

export default router;
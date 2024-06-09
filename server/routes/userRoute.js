import mongoose from "mongoose";
import express from 'express';
import User from '../models/user.js'

const router = express.Router();

router.route("/").post(async (req, res) => {
    try {
        console.log("Entered Here");
        const {userEmail, userName} = req.body;


    } catch (error) {
        
    }
})
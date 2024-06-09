import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>console.log(`Connected to Database`))
.catch(e=>console.log(e));

app.listen(port, ()=>console.log(`Server listening at port ${port}`))
// .catch(e=>console.log(`Error: ${e}`));

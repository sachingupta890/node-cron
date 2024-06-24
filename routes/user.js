import express from "express";
import { newUser } from "../controller/user.js";


const router = express.Router();

router.post('/create',newUser);

export default router;
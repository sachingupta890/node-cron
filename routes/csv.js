import express from "express";
import { process } from "../controller/csv.js";
const router = express.Router();

router.post('/process', process);

export default router;
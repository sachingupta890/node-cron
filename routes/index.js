import express from "express";
import userRoutes from "./user.js"
import csvRoutes from "./csv.js"

const router = express.Router();

router.use("/user", userRoutes);
router.use("/csv", csvRoutes);


export default router;
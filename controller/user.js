import  User from "../models/userModel.js";

export const newUser = async (req, res) => {
    
   const { name, email, password } = req.body;

   if (!name || !email || !password) {
     return res.status(400).json({ message: "All fields are required" });
   }

   try {
     const user = await User.create({ name, email, password });
     return res
       .status(201)
       .json({ message: "User created successfully", user });
   } catch (err) {
    
     return res
       .status(500)
       .json({ message: "An error occurred", error: err.message });
   }
}



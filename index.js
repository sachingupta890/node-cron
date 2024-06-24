import express from "express";
import dotenv from "dotenv"
import db from "./models/index.js"
import indexRoutes from "./routes/index.js"

dotenv.config()

const app = express();

const PORT = process.env.PORT

app.get("/",(req,res)=>{
  return res.json({
    message:'This is Default route'
  })
})

app.use(express.json());
app.use("/api/v1", indexRoutes);




db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Backend server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to establish connection: " + error);
  });








// import express from "express";
// import dotenv from "dotenv";
// import sequelize from "./db/index.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//     return res.json({
//         message: "This is the Default Route"
//     });
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     sequelize.sync();

//     app.listen(PORT, () => {
//       console.log(`Backend server started on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("Failed to establish connection: " + error);
//   });

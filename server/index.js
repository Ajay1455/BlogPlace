import express from "express"
const app=express();
import authRoutes from "./routes/auth.js"
// import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";
import multer from "multer";

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  app.post("/server/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/server/auth", authRoutes);
// app.use("/server/user", userRoutes);
app.use("/server/posts", postRoutes);


app.listen(2000, ()=>{
    console.log("connected...")
})
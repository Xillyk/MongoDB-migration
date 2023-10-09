import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import corsOptions from "./config/corsOptions";
import connectDB from "./config/dbConnection";

const app = express();
const PORT = Bun.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

connectDB();

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(morgan("combined"));

app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());
// app.use(express.static("uploads/"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});

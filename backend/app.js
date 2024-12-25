import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import connectToDb from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

connectToDb();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello world!");
});

export default app;
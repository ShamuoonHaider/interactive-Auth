import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello Express!");
});

app.use("/api", userRouter);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

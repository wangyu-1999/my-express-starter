import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import greetingRoutes from "./routes/greeting.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/api", (_req, res) => {
  res.json({ message: "Hello, World!" });
});
app.use("/api", greetingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

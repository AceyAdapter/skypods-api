import express, { Request, Response } from "express";
import dotenv from "dotenv";
import db from "./db.js";
import skypodsRoutes from "./routes/skypods.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use("/skypods", skypodsRoutes);

// Test endpoint
app.get("/", (req: Request, res: Response) => {
  res.status(200).json("SkyPods API is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`SkyPods API listening on port ${port}`);
});

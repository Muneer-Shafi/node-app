import express, { Request, Response } from "express";
import { employees, students } from "./data/data";



const app = express();
const PORT = 8000;

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.get("/students", (req: Request, res: Response) => {
  res.json(students);
});

app.get("/employees", (req: Request, res: Response) => {
  res.json(employees);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express TypeScript App!  Hello iam  version 2 ");
});

app.get("/health-check", (req: Request, res: Response) => {
  res.status(200).json({ status: "Healthy-v1" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

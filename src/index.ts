import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.get("/students", (req: Request, res: Response) => {
  res.json({ message: "List of students" });
});

app.get("/employees", (req: Request, res: Response) => {
  res.json({ message: "List of employees" });
});

app.get("/welcome", (req: Request, res: Response) => {
  res.send("Welcome to the Express TypeScript App!");
});

app.get("/health-check", (req: Request, res: Response) => {
  res.status(200).json({ status: "Healthy" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express, { Request, Response } from "express";

const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 28,
    position: "Software Engineer",
  },
  {
    id: 3,
    name: "Tom Smith",
    age: 35,
    position: "Project Manager",
  },
  {
    id: 4,
    name: "Jerry Johnson",
    age: 40,
    position: "Software Engineer",
  },
  {
    id: 5,
    name: "Sara Johnson",
    age: 35,
    position: "Software Engineer",
  },
];
const students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    grade: "A",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 22,
    grade: "B",
  },
  {
    id: 3,
    name: "Tom Smith",
    age: 21,
    grade: "A",
  },
  {
    id: 4,
    name: "Jerry Johnson",
    age: 23,
    grade: "B",
  },
  {
    id: 5,
    name: "Sara Johnson",
    age: 22,
    grade: "A",
  },
];

const app = express();
const PORT = 3000;

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
  res.send("Welcome to the Express TypeScript App!");
});

app.get("/health-check", (req: Request, res: Response) => {
  res.status(200).json({ status: "Healthy-v1" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

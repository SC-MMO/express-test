import express, { Request, Response } from "express";

const app = express();
const port: number = +(process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Got a POST request");
});

app.put("/", (req: Request, res: Response) => {
  res.send("Got a PUT request");
});

app.delete("/", (req: Request, res: Response) => {
  res.send("Got a DEL request");
});

app.patch("/", (req: Request, res: Response) => {
  res.send("Got a PATCH request");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});

import express, { Request, Response } from "express";
import { prisma } from "./lib/prisma";

const app = express();

const cors = require("cors");
const corsOptions = { origin: ["http://10.12.19.19:5173"] };
app.use(cors(corsOptions));

app.use(express.json());

const router = express.Router();

router.get("/fruits", (req: Request, res: Response) => {
  res.json({
    fruits: [
      "Apple",
      "Apricot",
      "Avocado",
      "Banana",
      "Blackberry",
      "Blueberry",
      "Boysenberry",
      "Cantaloupe",
      "Cherry",
      "Clementine",
      "Coconut",
      "Cranberry",
      "Currant",
      "Date",
      "Dragonfruit",
      "Durian",
      "Elderberry",
      "Feijoa",
      "Fig",
      "Gooseberry",
    ],
  });
});

router.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.post("/create_user", async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
    },
  });
  console.log("Created user:", user);
  res.json(user);
});

app.use("/api", router);

const port: number = +(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

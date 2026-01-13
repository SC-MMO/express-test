import express, { Request, Response } from "express";

const app = express();

const cors = require("cors");
const corsOptions = { origin: ["http://10.12.19.19:5173"] };
app.use(cors(corsOptions));

app.get("/api", (req: Request, res: Response) => {
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

const port: number = +(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

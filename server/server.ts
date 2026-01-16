import express from "express";
import expressSession from "express-session";
import { router } from "./api";
import { prisma } from "./lib/prisma";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
const app = express();

// cors
const cors = require("cors");
const corsOptions = { origin: ["http://10.12.19.19:5173"], credentials: true };
app.use(cors(corsOptions));

// json parsing for axios?
app.use(express.json());

//sessions
app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: `${process.env.SECRET_KEY}`,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

import passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

//startup
const port: number = +(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

// routes
app.use("/api", router);

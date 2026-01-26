import express, { Request, Response, NextFunction } from "express";
import { prisma } from "./lib/prisma";
import bcrypt from "bcrypt";
import { strategy } from "./passport";
import passport from "passport";
import { UserModel } from "./generated/prisma/models";

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  res.redirect("/sign-in");
}

passport.use(strategy);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    done(null, user || null);
  } catch (err) {
    done(err, null);
  }
});

const router = express.Router();

router.get("/fruits", ensureAuthenticated, (req: Request, res: Response) => {
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

router.get(
  "/users",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error while fetching users" });
    }
  },
);

router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.session?.destroy((err) => {
      if (err) {
        console.log("Failed to destroy session during logout:", err);
      }
      res.json({ message: "Logged out successfully" });
    });
  });
});

router.get("/me", (req: Request, res: Response) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res.json({
      authenticated: true,
      user: req.user,
    });
  } else {
    return res.status(401).json({ authenticated: false });
  }
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.login(user, (err) => {
      if (err) return next(err);
      return res.json({
        message: "Logged in successfully",
        user: { id: user.id, username: user.username },
      });
    });
  })(req, res, next);
});

router.get(
  "/posts",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const posts = await prisma.post.findMany();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Error while fetching posts" });
    }
  },
);

router.post(
  "/create_post",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    const title = req.body.title;
    const content = req.body.content;
    const user = req.user as UserModel;

    try {
      const post = await prisma.post.create({
        data: {
          title: title,
          content: content,
          author: {
            connect: { id: user.id },
          },
        },
      });

      res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create post" });
    }
  },
);

router.post("/create_user", async (req: Request, res: Response) => {
  const hashedPsw = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hashedPsw,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

export { router };

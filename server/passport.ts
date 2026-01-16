import { Strategy as LocalStrategy } from "passport-local";
import { prisma } from "./lib/prisma";
import bcrypt from "bcrypt";

const strategy = new LocalStrategy(
  {
    usernameField: "identifier",
    passwordField: "password",
  },
  async (identifier, password, done) => {
    try {
      const user =
        (await prisma.user.findUnique({ where: { username: identifier } })) ||
        (await prisma.user.findUnique({ where: { email: identifier } }));

      if (!user) return done(null, false, { message: "Incorrect credentials" });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid)
        return done(null, false, { message: "Incorrect credentials" });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
);

export { strategy };

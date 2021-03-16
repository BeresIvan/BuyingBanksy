import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
const googleStrategy = require("passport-google-ouath20").Strategy;
import keys from "./client/config/index";
import chalk from "chalk";

const user = {};

passport.serializeUser(fn, (user, cb) => {
  cb(null, user);
});

passport.deserializeUser(fn, (user, cb) => {
  cb(null, user);
});

const app = express();
app.use(cors());
app.use(passport.initialize());

//Google strategy:
passport.use(
  newGoogleStartegy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.ClientSecret,
      callbackUrl: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

app.get("/auth/google", passport.authenticate( startegy, "google";
app.get("/auth/google/callback",
    passport.authenticate(("google"),
    options, (req, res) => {
      res.redirect("/profile");
    }));

const PORT = 5000;
app.listen(PORT);
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./BuyingBanksy/routes";
// import passport from "passport";
// import passportGoogle from "passport-google-ouath20";
// import keys from "./client/config";
// import chalk from "chalk";
// const googleStrategy = passportGoogle.Strategy;

const user = {};

// passport.serializeUser(fn, (user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser(fn, (user, cb) => {
//   cb(null, user);
// });

const app = express();
app.use(cors());
// app.use(passport.initialize());

// //Google strategy:
// passport.use(
//   newGoogleStartegy(
//     {
//       clientID: keys.GOOGLE.clientID,
//       clientSecret: keys.GOOGLE.ClientSecret,
//       callbackUrl: "/auth/google/callback",
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       console.log(chalk.blue(JSON.stringify(profile)));
//       user = { ...profile };
//       return cb(null, profile);
//     }
//   )
// );

// app.get("/auth/google", passport.authenticate( Strategy, "google")),
// app.get("/auth/google/callback",
//   passport.authenticate(("google"),
//     options, (req, res) => {
//       res.redirect("/profile");
//     }));


const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


console.log(bodyParser);
//console.log(googleStrategy);
console.log(user);
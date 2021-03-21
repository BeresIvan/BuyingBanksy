const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/userRouter");
const customerRouter = require("./routes/customerRouter");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");
//set up express
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


const corsOptions = { origin: [
  "https://buyingbanksy.herokuapp.com/",
  "http://localhost:3000",
  "http://localhost/8000/auth/github/callback", ],
methods: ["GET", "PUT", "POST"],
optionsSuccessStatus: 200,};

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//set up routes for user
app.use(userRouter);
app.use(apiRoutes);
app.use(customerRouter);

//set up mongoose
mongoose.connect(
  process.env.DATABASE_ACCESS,
  {
    useNewUrlParser: true,
    useUnifiedTopoligy: true,
    useCreateIndexes: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("mongo db connection establishid");
  }
);
app.use(cors(corsOptions));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));

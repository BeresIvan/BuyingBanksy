const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//set up express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server started on ${PORT}`));

//set up mongoose
mongoose.connect(
  process.env.DATABASE_ACCESS,
  {
    useNewUrlParser: true,
    useUnifiedTopoligy: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("mongo db connection establishid");
  }
);

//set up routes for user
app.use("/users", require("./routes/userRouter"));
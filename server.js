const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRouter");
const apiRoutes = require("./routes");
//set up express
const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  console.log("testing 1234");
  app.use(express.static("client/build"));
}

//set up routes for user
app.use(userRoutes);
app.use(apiRoutes);

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server started on ${PORT}`));

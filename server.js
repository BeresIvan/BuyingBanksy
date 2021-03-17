import express from "express";
import cors from "cors";



const authRoutes = require ("./routes/auth ");

app.use (express.json());
app.use (cors());

app.use ("/api", authRoutes);

const port = process.env.PORT;
app.lidten(port, () => {
  console.log("server is running on port: ${port}");
});


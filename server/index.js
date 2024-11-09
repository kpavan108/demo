const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB using mongoose
mongoose.connect("mongodb+srv://nani:Nani2704@cluster0.9qvfy.mongodb.net/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

// Define the user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userModel = mongoose.model("emp", userSchema);

// Create and save a new user document
const emp1 = new userModel({
  name: "pavan",
  age: 25,
});

emp1.save()
  .then(() => {
    console.log("Employee saved successfully!");
  })
  .catch((error) => {
    console.log("Error saving employee:", error.message);
  });

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

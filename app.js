const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog.model");
const About = require("./models/about.model");

// create "app" object from "express" factory function
const app = express();
// set "view engine" as EJS | It will look for the "views" directory
app.set("view engine", "ejs");
// Middleware for static files to "public" directory
app.use(express.static("public"));
// Middleware for encoding URL data
app.use(express.urlencoded({ extended: true }));
// connect to the "mongoose DB"
const dbURI =
  "mongodb+srv://alaminuixd:khan193011@cluster-0.ddhxj.mongodb.net/khantuts?retryWrites=true&w=majority&appName=Cluster-0";
// connect is an asynchronous function that return a promise
mongoose
  .connect(dbURI)
  .then((response) => {
    console.log("Connected to the DB");
    // Listen to the server port 3000
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Listening to the port ${3000}`);
    });
  })
  .catch((err) => console.error(err));
// Home page Route
app.get("/", (req, res) => res.redirect("/blogs"));
// All Blogs display page Route
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((response) => {
      res.render("index", { title: "All Blogs", blogs: response });
    })
    .catch((err) => console.error(err));
});
// Create Blog form page Route
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new post" });
});
// Single blog page by blog id Route
app.get("/blogs/:blogID", (req, res) => {
  const id = req.params.blogID;
  Blog.findById(id)
    .then((response) => {
      res.render("details", { title: "single Blog", blog: response });
    })
    .catch((err) => console.error(err));
});
// Delete a blog from the DB document Route
app.delete("/blogs/:blogID", (req, res) => {
  const id = req.params.blogID;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.error(err));
});
// Post a new blog document to the DB Route
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((response) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.error(err));
});
// About page Route
app.get("/about", (req, res) => {
  About.find()
    .then((result) => {
      res.render("about", { title: "About", about: result });
    })
    .catch((err) => console.error(err));
});
// Middleware route for 404 Not found page
app.use((req, res) => res.render("404", { title: "404 | Not found!" }));

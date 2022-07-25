// 1. import all dependencies
const express = require("express");
const app = express();
const cors = require("cors");

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// express configurations
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})) ;

// This is where we import the users routes function from our jokes.routes.js file
const AllAuthorsRoutes = require("./routes/authors.routes");
AllAuthorsRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

require("./config");
const Product = require("./Product.js");

const app = express();
const port = 80;

// express stuff
app.use("/static", express.static("static"));
app.use(express.urlencoded());
// app.use(express.json);

// pug stuff
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

// endpt for get
app.get("/",(req,response)=>{
    const param = {"title":"dance portal"};
    response.status(200).render("home.pug",param);
})

app.get("/contact",(req,response)=>{
    const param = {"title":"dance portal"};
    response.status(200).render("contact.pug",param);
})


// post request on contact
app.post("/contact",async (req,response)=>{
    // body-parser = middleware
    let data = new Product(req.body);
    let result = await data.save();

    console.log(result);
    response.send("item has to be saved to the database");
})

app.listen(port,()=>{
    console.log(('the application started successfully on ${port}'));
});
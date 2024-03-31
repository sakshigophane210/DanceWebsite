const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    phone: Number,
    email:String,
    address:String,
    desc:String
});

module.exports = mongoose.model("contact",productSchema);
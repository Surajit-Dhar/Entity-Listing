const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connect = require("./configs/db");
const productController = require("./controllers/product.controller");

app.use("/product" , productController);



app.listen(5000, async() => {
    try{
        await connect();
     
    }catch(err){
        console.log(err.message);
    }
    console.log("Listing on port 5000 ");
})
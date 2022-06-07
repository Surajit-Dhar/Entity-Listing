const mongoose = require("mongoose");


const productController = new mongoose.Schema({
    id:{type:Number , required:true},
    image : {type: String , required:true},
    title : {type:String , required:true},
    details : {type : String , required:true},
    rating : {type:Number , required:true},
    status : {type:String , required:false},
    prize : {type:Number, required:true},
    deliver:{type:String,required:true},
},
{
    versionKey:false,
}
);


const Product = mongoose.model("product", productController);

module.exports=Product;

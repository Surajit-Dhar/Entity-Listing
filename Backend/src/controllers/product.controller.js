const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();

router.get("", async (req,res) => {
    try{
        const product = await Product.find().lean().exec();
        return res.status(200).send({Produts:product});

    }catch(err){
        return res.status(404).send({message:err.message});
    }
});

router.post("", async (req,res) => {
    try{
        const product = await Product.create(req.body);
        return res.status(201).send(product);

    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.delete("/:id", async (req,res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(product);

    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.patch("/:id", async (req,res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id , req.body, {
            new:true,
        })
        return res.status(200).send(product);

    }catch(err){
      return res.status(500).send(err.message);
    }
})



module.exports=router;

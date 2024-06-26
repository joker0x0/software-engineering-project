const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: false
    },
    stock:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:false
    },
    yearOfmodel:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    quantity: {
        type: Number,
        requried: true
    }

},{timestamps:true})

const productModel = mongoose.model("product",productSchema)
module.exports=productModel
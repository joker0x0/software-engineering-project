const productModel = require("../models/productModel")

const addProduct = async (req,res)=>{
    // const {name, description, stock, price, color, yearOfmodel, image} = req.body

    // const response = await productModel.find(name)

    // if(response){
        
    //     return res.status(400).json("Already Existing")
    // } else {
    //     const newProduct = new productModel({name, description, stock, price, color, yearOfmodel, image})
    //     await newProduct.save((err)=>{
    //         if (err){
    //             return res.status(500).json("Couldn't save product")
    //         }else{
    //             return res.status(200).json("Product Added")
    //         }
    //     })
        
    // }
}
const deleteProduct = async(req,res)=>{

}
const updateProduct = async(req,res)=>{
    // const {id, name, description, stock, price, color, yearOfmodel, image} = req.body

    // const response = await productModel.findById(id)

    // if(response){
    //     await productModel.findByIdAndUpdate(id, {$set: {name, description, stock, price, color, yearOfmodel, image}})
    //     return res.status(200).json("Update Successfully")
    // } else {
    //     return res.status(400).json("Couldn't update product")
    // }
}

const showProduct = async(req, res) => {
    // const response = await productModel.find()

    // if(response) {
    //     return res.status(200).json(response)
    // } else {
    //     return res.status(400).json("Couldn't Fetch Products")
    // }
}

module.exports={
    addProduct,
    deleteProduct,
    updateProduct,
    showProduct
}
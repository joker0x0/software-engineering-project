const productModel = require("../models/productModel")

const addProduct = async (req,res)=>{
    const {name, description, stock, price, color, yearOfmodel, image, quantity} = req.body
    const product = await productModel.findOne({name, description, stock, price, color, yearOfmodel, image, quantity})
    
    if(product) {
        return res.status(500).json("This product is already in exist")
    } else {
        const newProduct = new productModel({name, description, stock, price, color, yearOfmodel, image, quantity})
        await newProduct.save()
    }
}
const deleteProduct = async(req,res)=>{
    const id= req.body.id;
    //find Index to check if it is in the database or not
    const Index=await productModel.findById(id);

    if(Index){
        //remove product from the array
        await productModel.findByIdAndDelete(id);
        return res.status(200).json(`Ths Product Is Deleted succesfully`);
    }
    else {
        return res.status(400).json("product was not found");
    }


}
const updateProduct = async(req,res)=>{
    const {id, name, description, stock, price, color, yearOfmodel, image, quantity} = req.body

    const response = await productModel.findById(id)

    if(response){
        await productModel.findByIdAndUpdate(id, {$set: {name, description, stock, price, color, yearOfmodel, image, quantity}})
        return res.status(200).json("Update Successfully")
    } else {
        return res.status(400).json("Couldn't update product")
    }
}

const showProduct = async(req, res) => {
    const response = await productModel.find()

    if(response) {
        return res.status(200).json(response)
    } else {
        return res.status(400).json("Couldn't Fetch Products")
    }
}

module.exports={
 addProduct,
 deleteProduct,
 updateProduct,
 showProduct
}
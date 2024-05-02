const productModel = require("../models/productModel")

    


// add product
const addProduct = async (req,res)=>{
    
}
const deleteProduct = async(req,res)=>{
        const id= req.body.id;
    //find Index to check if it is in the database or not
    const Index=await productModel.findById(id);

    if(Index){
        //remove product from the array
        await productModel.findByIdAndDelete(id);
        console.log("item with ID ${prproductModelID} is deleted succesfully");
        return res.status(200).json("item with ID ${prproductModelID} is deleted succesfully");
    }
    else {
        console.log("Item with ID ${productModelID} not found");
        return res.status(400).jason("Item with ID ${productModelID} not found");
    }


}
const updateProduct = async(req,res)=>{

}

module.exports={
    addProduct,
    deleteProduct,
    updateProduct  
}

const productModel = require("../models/productModel")

const addProduct = async (req,res)=>{
    try{
        const {name,decsription,stock,price,color,yearOfmodel} = req.body
 
        const newProduct = new productModel({
         name,
         decsription,
         stock,
         price,
         color,
         yearOfmodel
        })
        const savedProduct = await newProduct.save()
        res.status(200).json({message:'product added',savedProduct})
 
     }catch(error){
         res.status(500).json({message:'server error'})
     }
}


const deleteProduct = async(req,res)=>{
    try {
        const { id } = req.body; 
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
       // console.log("Error deleting product:", error);
        res.status(500).json({ message: 'Server error' });
    }
}


const updateProduct = async(req,res)=>{
try{ 
    const { id } = req.params;
    const { name, decsription,stock,price } = req.body;
    const updateProduct = await productModel.findOneAndUpdate({ _id: id }, { name,decsription,stock,price }, { new: true })
    console.log(updateProduct);
    if (updateProduct) {
        res.json({ message: 'Update Product Succesfully', updateProduct })
    } else {
        res.json({ message: 'in-valid id for product' })
    }
}catch(error){
    //console.log("Error", error);
    res.status(500).json({ message: 'Server error' });
}
}


const getProducts = async(req,res)=>{
    try {
        const products = await productModel.find();
        res.status(200).json({messgae:'get Products successfully ',products});
    } catch (error) {
       // console.log("Error", error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await productModel.findById(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
       // console.error("Error", error);
        res.status(500).json({ message: 'Server error' });
    }
}
const searchProducts = async (req, res) => {
    try {
        const key = req.params.key;

        const products = await productModel.find({
            $or: [
                { name: { $regex: key, $options: 'i' } }, 
                { description: { $regex: key, $options: 'i' } },
                { color: { $regex: key, $options: 'i' } },
                { yearOfmodel: { $regex: key, $options: 'i' } },
            ]
        });

        res.status(200).json(products);
    } catch (error) {
       // console.error('Error searching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}




module.exports={
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts,
    getProductById,
    searchProducts
}
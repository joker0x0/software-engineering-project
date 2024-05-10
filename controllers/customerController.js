const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const DeleteFromCart = async (req, res) => {
    try {
        const productId = req.params.id;
  
        await productModel.findByIdAndRemove(productId);
  
        console.log('Product deleted from cart:', productId);
        res.status(200).json({ message: 'Product deleted from cart successfully' });
  
    } catch (error) {
        console.error('Error deleting item from cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  };

  const AddToCart = async (req, res) => {
    try {
        const product = req.body;
  
        if (!product.stock) {
            return res.status(404).json({ error: 'This product is out of stock' });
        }
  
        console.log('Product added to cart:', product);
  
        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ error: 'Internal server error'});
  }
  };

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
        console.error('Error searching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const browseProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        
        res.status(200).json(products);
    } catch (error) {
        console.error('Error browsing products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const viewProduct = async (req, res) => {
    try {
        
        const product = await productModel.findById(req.params.id)
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.status(200).json({message:"Product found",product});
    } catch (error) {
        console.error('Error viewing product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    AddToCart,
    DeleteFromCart,
    EditCart,
    viewProduct,
    searchProducts,
    browseProducts,
    //trackOrder,
}
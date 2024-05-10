const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const trackOrder = async(req , res) =>{
    try{
        const userId = req.params.userId;
       const trackedOrder = await userModel.find(orders);
        
       res.status(200).json(trackedOrder); 
       if(!userId)
        return res.status(404).json({message: 'Please Log in to be able to track your orders'});
       else
        res.status(200).json(trackedOrder); 
    }
    catch(error){
        console.error('Cannot track product' , error);
        res.status(500).json({message:'Internal Server Error'});
    }
};

const EditCart = async (req, res) => {
  try {
      const productId = req.params.id;
      const action = req.body.action;

      let product = await productModel.findById(productId);

      if (!product) {
          return res.status(404).json({ error: 'Product not found' });
      }

      if (action === 'increment') {
          product.quantity += 1; 
      } else if (action === 'decrement') {
          if (product.quantity > 1) {
              product.quantity -= 1;
          } else {
              return res.status(400).json({ error: 'Quantity cannot be less than 1' });
          }
      } else {
          return res.status(400).json({ error: 'Invalid action' });
      }
      const updatedProduct = await product.save();
      console.log('Product details updated:', updatedProduct);
      res.status(200).json({ message: 'Product details updated successfully', updatedProduct });
  } catch (error) {
      console.error('Error updating product details:', error);
      res.status(500).json({ error: 'Internal server error' });
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
    browseProducts
}
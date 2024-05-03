const productModel = require("../models/productModel");

const trackOrder = async(req , res) =>{
    try{
       const foundProduct = await productModel.find(); //finds target product
       res.status(200).json(foundProduct); //checks product
       if(!foundProduct)
        return res.status(404).json({message: 'Product not found'});
       else
        res.status(200).json({message: 'Tracking Product...'}); 
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

module.exports = {
    AddToCart,
    DeleteFromCart,
    EditCart
}
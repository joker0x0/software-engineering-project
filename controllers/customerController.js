const productModel = require("../models/productModel")

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
        res.status(500).json({ error: 'Internal server error' });
    }
  };
  
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
const cartModel = require("../models/cartModel")



const addToCart = async (req, res) => {
    const { products } = req.body
    const { _id } = req.user
    const findCart = await findOne({
        model: cartModel,
        filter: { userId: _id }
    })
    // if user enter product to cart first time we create cart for him and add his products list
    if (!findCart) {
        const cart = await create({
            model: cartModel,
            data: {
                userId: _id,
                products
            }
        })
        return res.status(201).json({ message: "Done", cart })
    }

    // update exist cart

    for (const product of products) {
        let match = false;
        for (let i = 0; i < findCart.products.length; i++) {
            if (product.productId == findCart.products[i].productId.toString()) {
                findCart.products[i] = product
                match = true;
                break;
            }
        }
        if (!match) {
            findCart.products.push(product)
        }
    }

    await findOneAndUpdate({
        model: cartModel,
        filter: { userId: _id },
        data: { products: findCart.products },
        options: { new: true }
    })
    return res.status(200).json({ message: "Done", findCart })
}


const deleteFromCart = async (req, res) => {
    const { productId } = req.params; 
    const { _id } = req.user;
    try {
        // Find the user's cart based on their user ID
        const cart = await findOneAndUpdate({
            model: cartModel,
            filter: { userId: _id },
        });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Filter out the product with the specified productId from the cart's products array
        cart.products = cart.products.filter(product => product.productId !== productId);

        // Update the cart in the database with the modified products array
        await findOneAndUpdate({
            model: cartModel,
            filter: { userId: _id },
            data: { products: cart.products },
            options: { new: true }
        });
        return res.status(200).json({ message: 'Product removed from cart', cart });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports={
    deleteFromCart,
    addToCart
    
}

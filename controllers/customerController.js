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

const commitPayment = async(req , res) =>{
    try{
        const {id , u_name , amount} = req.body;
        const response = await accountModel.findById(id);
        const price = productModel.find(amount);
        const remain = response.amount - price.amount;
        if(!response )
            return res.status(404).json({message: 'Account not found'});
        else if(remain < 0)
            return res.status(200).json({message: 'Not enough money'});
        else
            res.status(200).json({message: 'Payment successful'});
    }
    catch(error){
        console.error('Cannot continue with payment' , error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};
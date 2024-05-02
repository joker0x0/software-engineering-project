const { addProduct, deleteProduct , updateProduct } = require("../controllers/productController")
const router = require("express").Router()
const { auth ,Roles } = require("../middlewares/authMiddleware");







router.post("/addProduct",auth([Roles.Admin]),addProduct)

router.delete('/removeProduct',auth([Roles.Admin]), deleteProduct);
//router.post('/editProduct', auth(), updateProduct);



module.exports=router
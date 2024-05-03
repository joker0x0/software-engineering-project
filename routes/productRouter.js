const { addProduct, deleteProduct , updateProduct, showProduct } = require("../controllers/productController")
const router = require("express").Router()
const { auth ,Roles } = require("../middlewares/authMiddleware");

router.post("/addProduct",auth([Roles.Admin]),addProduct)``
router.delete('/removeProduct',auth([Roles.Admin]), deleteProduct);
router.patch("/editProduct",auth([Roles.Admin]),updateProduct)
router.get('/showProduct',auth([Roles.Admin]), showProduct)



module.exports=router
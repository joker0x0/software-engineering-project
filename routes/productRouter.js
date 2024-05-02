const { addProduct, deleteProduct , updateProduct } = require("../controllers/productController")
const router = require("express").Router()
const { auth ,Roles } = require("../middlewares/authMiddleware");

router.post("/addProduct",auth([Roles.Admin]),addProduct)
router.post("/deleteProduct",auth([Roles.Admin]),deleteProduct)
router.post("/editProduct",auth([Roles.Admin]),updateProduct)



module.exports=router
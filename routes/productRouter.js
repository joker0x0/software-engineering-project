const { addProduct, deleteProduct , updateProduct, getProducts, getProductById ,searchProducts} = require("../controllers/productController")
const router = require("express").Router()
const { auth ,Roles } = require("../middlewares/authMiddleware");

//post
router.post("/addProduct",auth([Roles.Admin]),addProduct)

//delete
router.delete('/deleteproduct/:id',auth([Roles.Admin]), deleteProduct);

//patch 
router.patch('/updateproducts/:id', auth([Roles.Admin]), updateProduct);

//get
router.get('/getProducts', auth([Roles.Admin]), getProducts);
router.get('/getproduct/:id', auth([Roles.Admin]), getProductById);
router.get("/searchproducts",auth([Roles.User,Roles.Admin]),searchProducts);



module.exports=router
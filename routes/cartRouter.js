const{addToCart , deleteFromCart}=require("../controller/cartController")
const router = require("express").Router()
const { auth ,Roles } = require("../middleware/authMiddleware");


router.post('/',auth([Roles.User]) ,addToCart)
router.get('/cart/:productId',auth([Roles.User]),deleteFromCart)
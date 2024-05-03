const { AddToCart, DeleteFromCart , EditCart} = require("../controllers/customerController")
const router = require("express").Router()
const { auth ,Roles } = require("../middlewares/authMiddleware");

router.post("/addToCart",auth([Roles.user]),AddToCart)
router.delete("/deleteProduct",auth([Roles.user]),DeleteFromCart)
router.patch("/editCart",auth([Roles.user]),EditCart)

module.exports = router
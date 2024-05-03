const router = require("express").Router()
const {signUp,login} = require('../controllers/authController');
const userModel = require('../models/userModel');

router.post("/signup", signUp)
router.post("/login",login);


module.exports = router;
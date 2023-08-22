const router = require("express").Router();
let {LoginUser, SignUpUser} = require("../controllers/usersController")


router.post("/login",LoginUser)

router.post("/signup",SignUpUser)


module.exports = router;

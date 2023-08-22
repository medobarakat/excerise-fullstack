const router = require("express").Router();
const {getExcersices , getExcersicesById , deleteExcersiesById , addNewExcersies , updateExcersiseById} = require("../controllers/excersiseController")



router.route("/").get(getExcersices)

router.route("/:id").get(getExcersicesById)

router.route("/:id").delete(deleteExcersiesById)

router.route("/add").post(addNewExcersies)


router.route("/update/:id").post(updateExcersiseById);

module.exports = router
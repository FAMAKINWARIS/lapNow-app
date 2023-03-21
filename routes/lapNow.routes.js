const express = require("express");

// importing Auth
const { isAuth, authorize } = require('../utils/middleware/isAuth');

const { allusers, getUserbyemail, addlaptop } = require("../controllers/admin.controller");
const { userSignup, viewLaptops, login } = require("../controllers/user.controller");

const router = express.Router();

const { validateRequest, schemas } = require('../utils/middleware/validation');


router.post("/signup", validateRequest(schemas.userSchema),  userSignup)

router.post("/login", validateRequest(schemas.loginSchema), login)

router.get("/viewlaptops", isAuth, viewLaptops)

// admin routes
router.get("/allusers", isAuth, authorize(["admin"]), allusers);

router.post("/new-laptop", addlaptop)


module.exports = router;


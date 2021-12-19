const express = require("express");
const { index, create, login,   resetPassword} = require("../controllers/Users");
const schemas = require("../validations/Users");
const validate = require("../middlewares/validate");
// const authenticate = require("../middlewares/authenticate");
const authenticateAdmin = require("../middlewares/authenticateAdmin");

const router = express.Router();

router.route("/create-admin-user").post(validate(schemas.createAdminUser, "body"), create);
router.route("/login").post(validate(schemas.userLogin, "body"), login);

//! Admin Stuff.
router.route("/").get(authenticateAdmin, index);
router.route("/").post(validate(schemas.createUser, "body"), create);
// router.route("/:typeId").post(validate(userQuery, "query"),validate(createUser, "body"), create);
router
  .route("/reset-password")
  .post(validate(schemas.resetPasswordValidation), resetPassword);

module.exports = router;

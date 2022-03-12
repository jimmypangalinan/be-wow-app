const express = require("express");

const router = express.Router();

// controller user
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

//  controller auth
const { register, login } = require("../controllers/auth");

// controller product
const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
} = require("../controllers/product");

// middlewares
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

//  auth
router.post("/register", register);
router.post("/login", login);

// tb user
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

// tb product
router.post("/addProduct", uploadFile("cover"), addProduct);
router.get("/books", auth, getProducts);
router.get("/book/:id", getProduct);
router.patch("/book/:id", updateProduct);

module.exports = router;

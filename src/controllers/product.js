const { product } = require("../../models");

// Add New Product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const createProduct = await product.create({
      ...newProduct,
      cover: req.file.filename,
    });

    res.send({
      status: "Success",
      data: {
        book: createProduct,
      },
    });

    createProduct = JSON.parse(JSON.stringify(createProduct));
    res.send({
      status: "Success",
      ...createProduct,
      cover: "http://localhost:5000/uploads/" + createProduct.cover,
    });
  } catch (error) {
    console.log(error);
  }
};

// get products
exports.getProducts = async (req, res) => {
  try {
    const products = await product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Success",
      data: {
        books: products,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// get product by id
exports.getProduct = async (req, res) => {
  try {
    const products = await product.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["cover", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Success",
      data: {
        book: products,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// updtae product by id
exports.updateProduct = async (req, res) => {
  try {
    const newData = req.body;
    const updateProduct = await product.update(newData, {
      where: {
        id: req.params.id,
      },
    });
    res.send({
      status: "Success",
      data: {
        book: newData,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// delete product by id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await product.destroy({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Succes",
      message: "Delete Product Success",
      Details: product,
    });
  } catch (error) {
    console.log(error);
  }
};

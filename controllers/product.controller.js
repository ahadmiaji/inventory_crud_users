const Product = require("../models/product.model");



const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);

  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {

    const updateData = req.body;

    const productInfo = await Product.findById(req.body.id);

    if (!productInfo) {
      const customError = new Error("Invalid product.");
      customError.statusCode = 400;
      throw customError;
    }

    const productData = new Product(productInfo);
    let isChanged = false;

    if (updateData.name && productInfo.name !== updateData.name) {
      isChanged = true;
      productData.name = updateData.name;
    }

    if (updateData.partNumber && productInfo.partNumber !== updateData.partNumber) {
      isChanged = true;
      productData.partNumber = updateData.partNumber;
    }

    if (updateData.productLabel && productInfo.productLabel !== updateData.productLabel) {
      isChanged = true;
      productData.productLabel = updateData.productLabel;
    }

    if (updateData.startingInventory && productInfo.startingInventory !== updateData.startingInventory) {
      isChanged = true;
      productData.startingInventory = updateData.startingInventory;
    }

    if (updateData.inventoryReceived && productInfo.inventoryReceived !== updateData.inventoryReceived) {
      isChanged = true;
      productData.inventoryReceived = updateData.inventoryReceived;
    }

    if (updateData.inventoryShipped && productInfo.inventoryShipped !== updateData.inventoryShipped) {
      isChanged = true;
      productData.inventoryShipped = updateData.inventoryShipped;
    }

    if (updateData.inventoryOnHand && productInfo.inventoryOnHand !== updateData.inventoryOnHand) {
      isChanged = true;
      productData.inventoryOnHand = updateData.inventoryOnHand;
    }

    if (updateData.minimumRequired && productInfo.minimumRequired !== updateData.minimumRequired) {
      isChanged = true;
      productData.minimumRequired = updateData.minimumRequired;
    }

    if (isChanged) {
      const updateProduct = await productData.save();

      return res.json({
        success: true,
        statusCode: 200,
        products: updateProduct
      });
    }

  } catch (err) {
    console.log("Error: ", err);
    // throw err;
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json("deleted");
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct };
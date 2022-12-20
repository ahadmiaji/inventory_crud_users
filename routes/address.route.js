const express = require("express");
const { getAllAddresses, createAddress, getOneAddress, updateAddress, deleteAddress } = require("../controllers/address.controller");
const router = express.Router();


router.get("/", getAllAddresses);
router.post("/", createAddress);
router.put("/", updateAddress);
router.get("/:id", getOneAddress);
router.delete("/:id", deleteAddress);


module.exports = router;
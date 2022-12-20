const Address = require("../models/address.model");

const getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.find();
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createAddress = async (req, res) => {
    try {
        const newAddress = await Address.create(req.body);

        res.status(201).json(newAddress);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const getOneAddress = async (req, res) => {
    try {
        const address = await Address.create({ id: req.params.id });
        res.status(200).json(address);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const updateAddress = async (req, res) => {
    try {

        const updateData = req.body;

        const addressInfo = await address.findById(req.body.id);

        if (!addressInfo) {
            const customError = new Error("Invalid address.");
            customError.statusCode = 400;
            throw customError;
        }

        const addressData = new Address(addressInfo);
        let isChanged = false;

        if (updateData.yourName && addressInfo.yourName !== updateData.yourName) {
            isChanged = true;
            addressData.yourName = updateData.yourName;
        }

        if (updateData.email && addressInfo.email !== updateData.email) {
            isChanged = true;
            addressData.email = updateData.email;
        }

        if (updateData.phone && addressInfo.phone !== updateData.phone) {
            isChanged = true;
            addressData.phone = updateData.phone;
        }

        if (updateData.place && addressInfo.place !== updateData.place) {
            isChanged = true;
            addressData.place = updateData.place;
        }

        if (isChanged) {
            const updateAddress = await addressData.save();

            return res.json({
                success: true,
                statusCode: 200,
                addresses: updateAddress
            });
        }

    } catch (err) {
        console.log("Error: ", err);

    }
};

const deleteAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);
        res.json("deleted");
    } catch (err) {
        throw err;
    }
};


module.exports = { getAllAddresses, getOneAddress, createAddress, updateAddress, deleteAddress };

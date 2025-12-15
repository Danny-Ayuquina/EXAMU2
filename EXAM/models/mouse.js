const mongoose = require('mongoose');

const mouseSchema = new mongoose.Schema(
    {
    id: {type: Number},
    serialNumber: {type: String},
    brand: {type: String},
    model: {type: String},
    year: {type: Number},
    lastUpdate: {type: Number},
    price: {type: Number}
    },
    {collection: "Mouse"}
);

module.exports = mongoose.model("Mouse", mouseSchema);

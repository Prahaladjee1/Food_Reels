const mongoose = require('mongoose');
const foodPartnerModel = require('./foodpartner.model');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: foodPartnerModel,
    }
});
const FoodModel = mongoose.model('Food', foodSchema);

module.exports = FoodModel;
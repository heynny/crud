const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: [Date], required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    capacity: { type: Number, required: true },
    price: {type: Number, required: true},
    dateRegister:{type: Date, default:Date.now},
});

module.exports = mongoose.model("Event", EventSchema);


const mongoose = require("mongoose")

const scheduleSchema = new mongoose.Schema({
    UserId:{type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    Event:[{
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
        price:{type:Number,required:true},
        capacity:{ type: Number, required: true},
    }],

    state:{type:String, enum:["inscrito","cancelado"],default:"inscrito"},
    total:{type: Number, require:true},
    date: [{type: [Date], required: true }],
    dateRegister:{type: Date, default:Date.now},
})

module.exports = mongoose.model("schedule",scheduleSchema)


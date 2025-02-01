const schedule = require("../models/schedule");

exports.postSchedule = async (req,res) => {
    try{
        const newSchedule = new schedule(req.body);
        await newSchedule.save();
        res.status(201).json(newSchedule)
    }catch (error){
        res.status(500).json({message: "Error al crear el schedule", error: error.message});
    }
};

exports.getSchedule = async (req, res) => {
    try {
        const schedules = await schedule.find().populate("UserId").populate("Event.eventId");
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los schedules", error: error.message });
    }
};

exports.updateSchedule = async (req,res)=>{
    try{
        const scheduleUpdated = await schedule.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(200).json(scheduleUpdated);
    }catch (error){
        res.status(500).json({message: "Error al actualizar el Schedule", error: error.message});
    }
};

exports.deleteSchedule = async (req,res)=>{
    try{
        await schedule.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "schedule eliminado correctamente"});
    }catch (error){
        res.status(500).json({message:"Error al eliminar el schedule", error: error.message});

    }
}

const Event = require ("../models/Event");

//controlador de crear evento
exports.postEvent = async (req,res) => {
    try{
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    }catch (error){
        res.status(500).json({message: "Error al crear el evento", error: error.message});
    }
};

//controlador de obtener eventos creados
exports.getEvents = async (req, res) => {
    try{
        const Events = await Event.find();
        res.status(200).json({Events});
    }catch(error){
        res.status(500).json({message:"Error al obtener los eventos", error: error.message});
    }
};

//controlador para actualizar evento
exports.putEvent = async (req,res)=>{
    try{
        const updateEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if (!updateEvent){
            return res.status(404).json({message: "Evento no encontrado"});
        }
        res.status(200).json(updateEvent);
    }catch(error){
        res.satus(500).json({message: "Error al actualizar evento",error:error.message});
    }
};

//controlador para eleminar un evento
exports.deteleEvent = async (req,res)=>{
    try{
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Evento eliminado correctamente"});
    }catch(error){
        res.status(500).json({message:  "Error al eliminar el evento", error: error.message});
    }
};
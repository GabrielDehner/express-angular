const Notes = require('../models/notes.model'); //para consultas a BD
const notesController = {};

notesController.getNotes = async (req, res)=> {
    const  notes  = await Notes.find();
    res.json(notes);
};


notesController.createNotes = async (req, res) => {
    console.log(req.body);
    const notes = new Notes({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        importancia: req.body.importancia
    });
    console.log(notes);

    await notes.save();
    res.json({
        'status': 'Nota guardada'
    });
};

notesController.getNote = async (req, res) => {
    //console.log(req.params);
    const notes = await Notes.findById(req.params.id_n);
    res.json(notes);
};

notesController.editNote= async (req, res) => {
    const { id } = req.params;
    const  notes ={
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        importancia: req.body.importancia
    }
    await Notes.findByIdAndUpdate(id, {$set: notes}, {new: true});
    res.json({
        status: 'Nota actualizada'
    });
};

notesController.deleteNotes = async (req, res) => {
    await Notes.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Nota Eliminada'
    });
};
module.exports = notesController;
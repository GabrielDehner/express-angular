const mongoose = require('mongoose');
//para definir esquemas de datos
const {Schema} = mongoose;

const NotesSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    importancia:{type: String, required: true}
});

//pasar a modelo de datos mongoose
module.exports = mongoose.model('Notes', NotesSchema);
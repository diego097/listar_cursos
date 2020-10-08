const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;


const CursoSchema = new Schema({
    nombre: { type: String },
    credito: { type: String },
    precio: { type: String },
    docente: { type: String },
    timestamp: { type: Date, default: Date.now }
});

module.exports = model('Curso', CursoSchema);
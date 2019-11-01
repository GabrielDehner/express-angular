const express = require('express');
const router = express.Router();
const notes = require('../controllers/notes.controller');

//Api rest en json
router.get('/', notes.getNotes);//obtener
router.post('/', notes.createNotes);//crear
router.get('/:id_n', notes.getNote);
router.put('/:id', notes.editNote);//para actualizar datos
router.delete('/:id', notes.deleteNotes)


module.exports = router;
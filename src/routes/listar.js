const express = require('express');

const router = express.Router();
const { Curso } = require('../models/index');


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Microservicio para listar los cursos'
    });
});

router.get('/listar', async(req, res) => {
    const cursos = await Curso.find({});
    console.log(cursos);
    res.status(200).json(cursos);
})

router.post('/registro_matricula', async function(req, res) {
    const newMatricula = req.body();
    newMatricula.nombre = req.body('nombre');
    newMatricula.credito = req.body('nombre');
    newMatricula.precio = req.body('nombre');
    newMatricula.docente = req.body('nombre');
    await newMatricula.save();

});
module.exports = router;
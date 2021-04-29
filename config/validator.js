const validador = (req, res, next) => {
    if (req.body.nombre === '') {
       return res.json({success: false, error: 'No se puede mandar tarea en blanco, tarado'})
    } 
    console.log("Estoy por hacer next")
    next()
}

module.exports = validador
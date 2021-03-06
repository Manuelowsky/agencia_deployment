const Viaje = require('../models/Viajes');

exports.mostrarViajes = async(req, res) => {
    const viajes = await Viaje.findAll();
    //Primer parametro ruta, segundo parametro configuracion
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes: viajes
    });
}

exports.mostrarViaje = async(req, res) => {
    const viaje = await Viaje.findByPk(req.params.id);
    //Primer parametro ruta, segundo parametro configuracion
    res.render('viaje', {
        viaje: viaje
    });
}
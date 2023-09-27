const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.Actor.findAll().then((actors) => {
            return res.render("actorsList", {
                actors
            })
        })
            .catch((error => {
                console.log('Error en la conexión', error);
            }));
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(actors => {
                res.render('actorsDetail', { actors })
            })
            .catch((error => {
                console.log('Error en la conexión', error);
            }));
    }
}
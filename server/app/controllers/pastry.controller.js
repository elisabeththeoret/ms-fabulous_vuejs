const db = require('../models');
const Pastry = db.pastries;

/**
 * SELECT ALL
 * @param {*} req 
 * @param {*} res 
 */
exports.myFindAll = (req, res) => {
    // request
    Pastry.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: `
                <div class="flex col">
                    <h3>Oups!</h3>
                    <p>Aucune pâtisserie disponible pour le moment.</p>
                </div>
            `
        })
    });
}

/**
 * SELECT BY ID
 * @param {*} req 
 * @param {*} res 
 */
 exports.myFindOne = (req, res) => {
    // id
    const id = req.params.id
    
    // request
    Pastry.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: `
                <div class="flex col">
                    <h3>Oups!</h3>
                    <p>Désolé, cette pâtisserie n'est pas disponible pour le moment.</p>
                </div>
            `
        })
    });
}

/**
 * INSERT INTO
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.myCreate = (req, res) => {
    // validation
    message = []
    if (!req.body.name) {
        res.status(400).send({
            message: 'Le nom est requis'
        });
        return;
    }
    else if (!req.body.description) {
        res.status(400).send({
            message: 'Une courte description est requise'
        });
        return;
    }
    else if (!req.body.price) {
        res.status(400).send({
            message: 'Un prix est requis'
        });
        return;
    }
    
    // request
    Pastry.create(req.body).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: `
                <div class="flex col">
                    <h3>Oups!</h3>
                    <p>Désolé, une erreur s'est produite.</p>
                </div>
            `
        })
    });
}

/**
 * UPDATE
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.myUpdate = (req, res) => {
    // validation
    if (!req.body.name) {
        res.status(400).send({
            message: 'Le nom est requis'
        });
        return;
    }
    
    // id
    const id = req.params.id
    
    // request
    Pastry.update(req.body, { where: { id: id } }).then(num => {
        if (num == 1) {
            res.send({
                message: `
                    <div class="flex col">
                        <h3>C'est fait!</h3>
                        <p>Les données ont été mises à jour.</p>
                    </div>
                `
            })
        }
        else {
            res.send({
                message: `
                    <div class="flex col">
                        <h3>Oups!</h3>
                        <p>Désolé, une erreur s'est produite.</p>
                        <p>Les données n'ont pas pu être mises à jour...</p>
                    </div>
                `
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `
                <div class="flex col">
                    <h3>Oups!</h3>
                    <p>Désolé, une erreur s'est produite.</p>
                    <p>Les données n'ont pas pu être mises à jour...</p>
                </div>
            `
        })
    });
}

/**
 * DESTROY
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.myDestroy = (req, res) => {
    // id
    const id = req.params.id
    
    // request
    Pastry.destroy({ where: { id: id } }).then(num => {
        if (num == 1) {
            res.send({
                message: `
                    <div class="flex col">
                        <h3>C'est fait!</h3>
                        <p>La pâtisserie a été supprimée.</p>
                    </div>
                `
            })
        }
        else {
            res.send({
                message: `
                    <div class="flex col">
                        <h3>Oups!</h3>
                        <p>Désolé, une erreur s'est produite.</p>
                        <p>La pâtisserie n'a pas pu être supprimée...</p>
                    </div>
                `
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `
                <div class="flex col">
                    <h3>Oups!</h3>
                    <p>Désolé, une erreur s'est produite.</p>
                    <p>La pâtisserie n'a pas pu être supprimée...</p>
                </div>
            `
        })
    });
}

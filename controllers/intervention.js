const Intervention = require('../models/Intervention');

//TROUVER UN AGENT
exports.getAgentsIntervention = (req, res, next) => {
    Intervention.findOne({
        _id: req.params.id
    }).then(
        (intervention) => {
            res.status(200).json(intervention);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

//CREATION INTERVENTION
exports.addintervention = (req, res, next) => {
    const intervention = new Intervention({
        motif: req.body.motif,
        lieu: req.body.lieu,
        date: req.body.date
    });
    Intervention.save().then(
        () => {
            res.status(201).json({
                message: 'Intervention enregistrée'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//SUPPRIME INTERVENTION
exports.deleteIntervention = (req, res, next) => {
    Intervention.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Intervention supprimée'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//RECUPERE TOUTES LES INTERVENTIONS
exports.getAllIntervention = (req, res, next) => {
    Intervention.find().then(
        (intervention) => {
            res.status(200).json(intervention);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


const Agent = require('../models/Agent');
const jwt = require('jsonwebtoken');

//ENREGISTREMENT NOUVEL AGENT
exports.register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const agent = new Agent({
                numAgent: req.body.email,
                grade: req.body.grade,
                password: hash
            });
            agent.save()
                .then(() => res.status(201).json({ message: agent._id }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//CONNEXION
exports.login = (req, res, next) => {
    Agent.findOne({ numAgent: req.body.numAgent })
        .then(agent => {
            if (!agent) {
                return res.status(401).json({ error: '“Agent introuvable' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect' });
                    }
                    res.status(200).json({
                        numAgent: numAgent,
                        token: jwt.sign(
                            { agentnId: agent._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//MODIFIER AGENT
exports.update = (req, res, next) => {
    const agent = new Agent({
        _id: req.params.id,
        grade: req.body.grade
    });
    Agent.updateOne({ _id: req.params.id }, agent).then(
        () => {
            res.status(201).json({
                message: 'Pas autorisé'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
};
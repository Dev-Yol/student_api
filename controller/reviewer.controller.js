const Reviewer = require('../models').Reviewer
module.exports = {
    async create(req, res) {
        try {
            Reviewer.findOne({
                where: {
                    googleId: req.body.googleId
                }
            })
                .then(async data => {
                    if (data) {
                        res.json(data.toJSON())
                    } else {
                        const reviewer = await Reviewer.create({ ...req.body, image: req.body.imageUrl })
                        res.json(reviewer.toJSON())
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.toString()
                    });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    retrieveOne(req, res) {
        try {
            Reviewer.findOne({
                where: {
                    googleId: req.params.guid
                }
            })
                .then(async data => {
                    if (data) {
                        res.json(data.toJSON())
                    } else {
                        res.status(401).send({
                            message: 'Unauthorized'
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.toString()
                    });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}
const { Op } = require("sequelize");
const Review = require('../models').Review
const Comment = require('../models').Comment
module.exports = {
    async create(req, res) {
        try {
            let resp = []
            req.body.review.forEach(async rev => {

                const reviews = await Review.create({ ...rev })
                console.log(reviews.toJSON());
                resp.push(reviews)
            });

            res.json(resp)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    async createComment(req, res) {
        try {
            const comment = await Comment.create({ ...req.body })

            res.json(comment.toJSON())
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    // async getComments(req, res) {
    //     try {
    //         const id = req.params.id;

    //         const comments = await Comment.findAll({
    //             where: {
    //                 studentId: {
    //                     [Op.eq]: id
    //                 }
    //             },
    //             include: [{ all: true, nested: true }]
    //         })
    //         return res.json(comments)
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send(error)
    //     }
    // }

}
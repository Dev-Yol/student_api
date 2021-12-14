const Student = require('../models').Student
const models = require('../models')
const { Op } = require('sequelize')
module.exports = {
    async create(req, res) {
        try {
            const newStudent = await Student.create({ ...req.body })
            console.log(newStudent.json);
            return res.json(newStudent.toJSON())
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    async getOne(req, res) {
        try {

            const id = req.params.id
            const student = await Student.findAll({
                where: {
                    id: {
                        [Op.eq]: id
                    }
                },
                include: [{ all: true, nested: true }]
            })
            return res.json(student)

        } catch (error) {
            console.log(error);
            res.status(500).send(error)


        }
    },
    async getAll(req, res) {
        try {
            const students = await Student.findAll({
                include: [{ all: true, nested: true }]
            })
            return res.json(students)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}
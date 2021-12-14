const express = require("express");
const routes = express.Router();
const student = require("../controller/student.controller")
const reviewer = require("../controller/reviewer.controller")
const rating = require("../controller/rating.controller")

routes.route("/student/create").post(student.create);
routes.route("/students").get(student.getAll);
routes.route("/student/:id").get(student.getOne);
routes.route("/reviewer/create").post(reviewer.create);
routes.route("/reviewer/:guid").get(reviewer.retrieveOne);
routes.route("/rating/create").post(rating.create);
routes.route("/rating/create-comment").post(rating.createComment);
// routes.route("/rating/comments/:id").post(rating.getComments);

module.exports = routes
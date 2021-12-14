'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Student.hasMany(models.Review)
      models.Student.hasMany(models.Comment)
    }
  };
  Student.init({
    name: DataTypes.STRING,
    course: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};

// {"googleId":"109730234753979668549","imageUrl":"https://lh3.googleusercontent.com/a-/AOh14GhjZKZaiahv5qPJhT2isN7_P1aM8vLolwQT1bcPAQ=s96-c","email":"yoltorres24@gmail.com","name":"Yol","givenName":"Yol"}
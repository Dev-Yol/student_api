'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Review.belongsTo(models.Reviewer, {
        foreignKey: 'reviewerId'
      });
      models.Review.belongsTo(models.Student, {
        foreignKey: 'studentId'
      });
    }
  };
  Review.init({
    reviewerId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    review: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
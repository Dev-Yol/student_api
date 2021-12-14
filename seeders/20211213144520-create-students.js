'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
 
    */
    await queryInterface.bulkInsert('Students', [
      {
        name: "Christian Pile",
        course: "BSIT 4B",
        image: "assets/img/avatar.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marco Pangilinan",
        course: "BSIT 4B",
        image: "assets/img/marco9.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joshua Esternon",
        course: "BSIT 4B",
        image: "assets/img/joshua.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kenneth Deleon",
        course: "BSIT 4B",
        image: "assets/img/avatar.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Justin Rose Cruz",
        course: "BSIT 4B",
        image: "assets/img/justin.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

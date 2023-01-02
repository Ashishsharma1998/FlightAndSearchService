"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 777",
          capacity: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 737",
          capacity: 230,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 774",
          capacity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A320",
          capacity: 320,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

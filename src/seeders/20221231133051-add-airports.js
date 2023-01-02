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
      "Airports",
      [
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          address: "Mumbai xyz",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai International Airport",
          address: "Mumbai xyx",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vadodara Airport",
          address: "Vadodara kyz",
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lal Bahadur Shastri Airport",
          address: "Varanasi pyz",
          cityId: 9,
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

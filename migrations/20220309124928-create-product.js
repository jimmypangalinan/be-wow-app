"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      publicationDate: {
        type: Sequelize.STRING,
      },
      pages: {
        type: Sequelize.INTEGER,
      },
      author: {
        type: Sequelize.STRING,
      },
      isbn: {
        type: Sequelize.INTEGER,
      },
      about: {
        type: Sequelize.TEXT,
      },
      bookFile: {
        type: Sequelize.STRING,
      },
      cover: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
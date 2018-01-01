"use strict";

module.exports = {
  up: function (query, DataTypes) {
    return query.createTable('User',
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      });
  },

  down: function (query, DataTypes) {
    return query.dropTable('User');
  }
};

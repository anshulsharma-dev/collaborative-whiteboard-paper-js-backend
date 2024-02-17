const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // Adjust the path as necessary

const User = sequelize.define("User", {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other fields as needed
});

module.exports = User;

// // models/user.js
// const { DataTypes } = require("sequelize");
// const sequelize = require("../db");

// const User = sequelize.define(
//   "User",
//   {
//     username: { type: DataTypes.STRING, allowNull: false },
//     password: { type: DataTypes.STRING, allowNull: false },
//   },
//   {}
// );

// module.exports = User;

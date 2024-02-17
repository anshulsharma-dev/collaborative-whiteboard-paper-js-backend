
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Drawing = sequelize.define(
  "Drawing",
  {
    data: { type: DataTypes.TEXT, allowNull: false },
  },
  {}
);

module.exports = Drawing;

// const { DataTypes } = require("sequelize");
// const sequelize = require("../db");

// const Drawing = sequelize.define(
//   "Drawing",
//   {
//     // Updated to store JSON string of drawing data; includes paths, colors, etc.
//     data: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       get() {
//         // Get JSON string from DB and parse it to return as object
//         const value = this.getDataValue("data");
//         return value ? JSON.parse(value) : null;
//       },
//       set(value) {
//         // Convert object to JSON string for storage in DB
//         this.setDataValue("data", JSON.stringify(value));
//       },
//     },
//     // Add fields for stroke color and width if they're not part of the 'data'
//     strokeColor: {
//       type: DataTypes.STRING,
//       allowNull: true, // Adjust based on whether you require this field
//     },
//     strokeWidth: {
//       type: DataTypes.INTEGER,
//       allowNull: true, // Adjust based on whether you require this field
//     },
//     // Consider including other properties as needed, e.g., creatorId, etc.
//   },
//   {
//     // Options: timestamps, etc.
//     timestamps: true, // Enables createdAt and updatedAt fields automatically
//   }
// );

// module.exports = Drawing;

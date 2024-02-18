const { DataTypes } = require("sequelize");
const sequelize = require("../db");

// const Drawing = sequelize.define(
//   "Drawing",
//   {
//     data: { type: DataTypes.TEXT, allowNull: false },
//   },
//   {}
// );

// module.exports = Drawing;

const Drawing = sequelize.define(
  "Drawing",
  {
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const value = this.getDataValue("data");
        return value ? JSON.parse(value) : null;
      },
      set(value) {
        this.setDataValue("data", JSON.stringify(value));
      },
    },
    strokeColor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strokeWidth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Drawing;

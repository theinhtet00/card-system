import db from "../resources/database";
import { DataTypes } from "sequelize";

const Staff = db.define(
  "staffs",
  {
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    StaffName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    StaffCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

db.sync({ logging: false });

module.exports = {
  Staff,
};

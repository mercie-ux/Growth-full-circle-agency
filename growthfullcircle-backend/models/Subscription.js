import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Subscription = sequelize.define("Subscription", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
});

export default Subscription;
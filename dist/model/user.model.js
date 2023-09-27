"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
;
UserModel.init({
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "elephantdbofusers",
    sequelize: config_1.newSequelize
});
UserModel.sync({ alter: true });

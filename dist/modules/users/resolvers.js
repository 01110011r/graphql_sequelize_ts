"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_1 = require("graphql");
const user_model_1 = require("../../model/user.model");
const resolvers = {
    Mutation: {
        // add user
        createUser: async (_, { username, email }, context, info) => {
            try {
                const findUser = await user_model_1.UserModel.findOne({ where: { email } });
                if (findUser)
                    return {
                        msg: `email already exist :( ----> ${email}`,
                        // data:{}
                    };
                const user = await user_model_1.UserModel.create({ username, email });
                console.log(user, 'sssds');
                return {
                    msg: "success",
                    data: user
                };
            }
            catch (error) {
                console.log(error.message);
                throw new graphql_1.GraphQLError(error.message, {
                    extensions: {
                        code: 'INTERNAL_SERVER_ERROR',
                        status: 500
                    }
                });
            }
        },
        // update
        updateUser: async (_, { username, email, user_id }, context, info) => {
            try {
                const user = await user_model_1.UserModel.findOne({ where: { user_id } });
                if (!user)
                    return { msg: "user not found!", data: null };
                const newData = await user_model_1.UserModel.update({ username, email }, { where: { user_id } });
                return { msg: "ok", data: newData };
            }
            catch (error) {
                console.log(error.message);
                throw new graphql_1.GraphQLError(error.message, {
                    extensions: {
                        code: 'INTERNAL_SERVER_ERROR',
                        status: 500
                    }
                });
            }
        },
        // delete
        deleteUser: async (_, { user_id }) => {
            try {
                user_id && await user_model_1.UserModel.destroy({ where: { user_id } });
                return { msg: `deleted was id: ${user_id}`, data: {} };
            }
            catch (error) {
                console.log(error.message);
                throw new graphql_1.GraphQLError(error.message);
            }
        }
    },
    Query: {
        users: async () => {
            try {
                const users = await user_model_1.UserModel.findAll();
                return users;
            }
            catch (error) {
                console.log(error.message);
                return error;
            }
        },
        // get user by id
        user: async (_, { user_id }) => {
            try {
                const oneUser = await user_model_1.UserModel.findOne({ where: { user_id } });
                return oneUser;
            }
            catch (error) {
                console.log(error.message);
                throw new graphql_1.GraphQLError(error.message);
            }
        }
    }
};
exports.resolvers = resolvers;

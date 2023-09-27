import { GraphQLError } from "graphql";
import { UserModel } from "../../model/user.model"

const resolvers = {
    Mutation: {
        // add user
        createUser: async (_: undefined, { username, email }: { username: string, email: string }, context: {}, info: {}) => {
            try {
               const findUser=await UserModel.findOne({where:{email}});
 
               if(findUser)return {
                msg:`email already exist :( ----> ${email}`
               }

                const user = await UserModel.create({ username, email });
                console.log(user, 'sssds');
                
                return {
                    msg:"success",
                    data:user
                };
            } catch (error: any) {
                console.log(error.message);
                throw new GraphQLError(error.message, {
                    extensions: {
                        code: 'INTERNAL_SERVER_ERROR',
                        status: 500
                    }
                })

            }
        },



        // update
        updateUser: async (_: undefined, { username, email, user_id}: { username: string, email: string, user_id:string }, context:null, info: {}) => {

            try {
                const user: UserModel | null | { user_id: string, username: string, email: string } = await UserModel.findOne({ where: { user_id} });
                if (!user) return { msg: "user not found!", data: null };

                const newData = await UserModel.update({ username, email }, { where: { user_id} });
                return { msg: "ok", data: newData };
            } catch (error: any) {
                console.log((error as Error).message);
                throw new GraphQLError(error.message, {
                    extensions: {
                        code: 'INTERNAL_SERVER_ERROR',
                        status: 500
                    }
                });

            }

        },



        // delete

        deleteUser: async (_: undefined, { user_id }: { user_id: string | undefined }) => {
            try {
                user_id && await UserModel.destroy({ where: { user_id } });
                return { msg: `deleted was id: ${user_id}`, data: {} };
            } catch (error: any) {
                console.log(error.message);
                throw new GraphQLError(error.message);

            }
        }

    },



    Query: {
        users: async () => {
            try {
                const users = await UserModel.findAll();
                return users;
            } catch (error) {
                console.log((error as Error).message);
                return error

            }
        },
        // get user by id
        user: async (_: undefined, { user_id }: { user_id: string | undefined | null }) => {
            try {
                const oneUser = await UserModel.findOne({ where: { user_id } });
                return oneUser;
            } catch (error: any) {
                console.log(error.message);

                throw new GraphQLError(error.message);
            }
        }

    }
};


export { resolvers };
import { DataTypes, Model} from "sequelize";
import { newSequelize } from "../config";

export class UserModel extends Model{};



UserModel.init(
    {
    user_id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
    },
    username:{
type:DataTypes.STRING,
allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:"elephantdbofusers",
    sequelize:newSequelize
}
);


UserModel.sync({alter:true});
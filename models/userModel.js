import { Sequelize,DataTypes,Model } from "sequelize";


class User extends Model{
    static init(sequelize){
        return super.init(
            {
                id:{
                    type:DataTypes.INTEGER,
                    allowNull:false,
                    primaryKey:true,
                    autoIncrement:true,
                },
                name:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
                email:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
                password:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
            
            },
            {
                sequelize,
                modelName:"User",
                tableName:'users',
                timestamps:false
            }
        )
    }
}

export default User;
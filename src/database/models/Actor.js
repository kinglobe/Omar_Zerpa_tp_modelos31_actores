module.exports = (sequelize,DataTypes) =>{

    const alias = 'Actor';

    const cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true

        },
        first_name : {
            type : DataTypes.STRING(100),
            allowNull : false,

        },
        last_name : {
            type : DataTypes.STRING(100),
            allowNull : false,

        },
        rating : {
            type : DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
            

        }
        
    }

    const config = {
        tableName : "actors",
        timestamps : true,   /* hay que avisarle que no estan */
        underscored : true, /* avisarle que no estan escrita como la espera */
    }


    const Actor = sequelize.define(alias,cols,config);

    return Actor
}
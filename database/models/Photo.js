
module.exports = (sequelize, DataTypes)=>{
    const Photo = sequelize.define('Photo',{
        nome:DataTypes.STRING,
        size:DataTypes.NUMBER,
        key:DataTypes.STRING,
        url:DataTypes.STRING,
        
      
    }, {
        tableName:'photos', 
        timestamps:false
    })
    return Photo
}

 


module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{
        post:DataTypes.STRING,
        link:DataTypes.STRING,
        likes:DataTypes.INTEGER,
        qtd_comentarios:DataTypes.INTEGER,
        share:DataTypes.INTEGER,
        photo:DataTypes.STRING,
    }, {
        tableName:'post', 
        timestamps:false
    })
     
    return Post
}
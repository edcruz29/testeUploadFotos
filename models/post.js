const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.showPost = () =>{
  const show = db.Post.findAll({
      order:[['id','DESC']]
  });
  return show
 }

exports.createNewPost = (post,photo) =>{
 const criar = db.Post.create(post,photo)
 return criar
  }
  exports.deletarPost = (id) =>{
   db.Post.destroy({where:{id}})
   const listar =  db.Post.findAll();
   return listar;
  }
  

  
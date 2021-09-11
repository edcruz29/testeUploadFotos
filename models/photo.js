const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.showPhotos = () =>{
  const show = db.Photo.findAll();
  return show
 }

exports.createNewPhoto = (nome,size,key,url) =>{
  console.log(nome)
 const criar = db.Photo.create(nome,size,key,url)
 return criar
  }
  exports.deletarPhoto = (id) =>{
   db.Photo.destroy({where:{id}})
   const listar =  db.Photo.findAll();
   return listar;
  }
  

  
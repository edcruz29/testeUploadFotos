const photoModels = require("../models/photo");


exports.showPhotos=()=>photoModels.showPhotos();
exports.cadastrarPhoto=({nome,size,key,url})=>photoModels.createNewPhoto({nome,size,key,url});
exports.delete=(id)=>photoModels.deletarPhoto(id);

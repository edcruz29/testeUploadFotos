const postModels = require("../models/post");


exports.showPosts=()=>postModels.showPost();
exports.criarPost=({post,photo})=>postModels.createNewPost({post,photo});
/*exports.delete=(id)=>photoModels.deletarPhoto(id);*/
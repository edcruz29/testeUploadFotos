const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const photosController = require('../controller/photosController.js')
const postController = require('../controller/postController.js')

/* GET home page. */
router.get('/posts', async function(req, res, next) {
    res.render('post')
});
router.post('/posts', multer(multerConfig).single('file'), async function(req, res, next) {
const{location:photo} = req.file
const {post} = req.body

const postagem = await postController.criarPost({post,photo});

return res.redirect('/')

/*const{originalname:nome, size, key, location:url=''} = req.file;
const post = await photosController.cadastrarPhoto({nome, size, key, url})

return res.json(post)*/

});
router.delete('/posts/:id', async (req,res)=>{
    const{id}=req.params;
    const post = await photosController.delete(id);
    return res.json(post)
});

router.get('/', async function(req, res, next) {
const posts = await postController.showPosts();
res.render('inicial',{posts})
});


module.exports = router;

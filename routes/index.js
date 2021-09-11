const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const photosController = require('../controller/photosController.js')

/* GET home page. */
router.get('/posts', async function(req, res, next) {
    const post = await photosController.showPhotos();
    return res.json(post)
});
router.post('/posts', multer(multerConfig).single('file'), async function(req, res, next) {
const{originalname:nome, size, key, location:url=''} = req.file;
const post = await photosController.cadastrarPhoto({nome, size, key, url})

return res.json(post)
});
router.delete('/posts/:id', async (req,res)=>{
    const{id}=req.params;
    const post = await photosController.delete(id);
    return res.json(post)
})


module.exports = router;

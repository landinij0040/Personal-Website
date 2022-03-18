import path from 'path';
import express from 'express';
var router = express.Router();
var images = ['js'];
router.get('/image/skills/:number', (req, res) =>{
    var number = parseInt(req.params.number);
    console.log(typeof number );
    console.log(images);
    var imageName = images[number];
    console.log(imageName);
    var thePic = path.join(__dirname, `../../public/images/skills/${imageName}.png`); 
    console.log(thePic)
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(thePic);    
});

export default router;
import path from 'path';
import express from 'express';
var router = express.Router();
// var images = ['js'];

router.get('/image/:folder/:picture', (req, res) => {
    var picture = req.params.picture;
    console.log(picture);
    var folder = req.params.folder;
    console.log(folder)
    var thePic = path.join(__dirname, `../../public/images/${folder}/${picture}`);
    console.log(thePic);
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(thePic);    
});

router.get('/image/:section', (req, res) => { // TODO: I dont think I need this
    var section = req.params.section;
    console.log(section);
    console.log(images);
    console.log(images[section]);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(images[section]);
});

router.get('/test', (req,res) => {
    res.send(images);
});



export default router;
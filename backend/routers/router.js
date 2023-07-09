const express=require('express');
const candyController=require('../controller/controller');

const router=express.Router();

router.get('/add-candy',candyController.homepage);

router.post('/add-candy',candyController.addCandy);

router.get('/candy/load-data',candyController.sendAllCandy);



router.put('/edit-candy/:candyId',candyController.editCandy);
// router.get('/edit-candy/:candyId',candyController.getEditCandy);

module.exports=router;
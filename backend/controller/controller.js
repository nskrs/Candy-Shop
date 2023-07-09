const path=require('path');
const CandyRecord=require('../model/model');
const rootDir=require('../utils/path.js');

exports.homepage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','index.html'));

}

exports.addCandy=async (req,res,next)=>{
    const candyname=req.body.candyname;
    const description=req.body.description;
    const price=req.body.price;
    const quantity=req.body.quantity;
    try{

        
        let result= await CandyRecord.create({candyname:candyname,description:description,price:price,quantity:quantity})
        
             console.log('candy added',result);
             res.status(200).json({"newecandy":result});
    }
    catch(err){
        console.log(err);
    }
}

exports.sendAllCandy=async (req,res,next)=>{
    try{

        let candies = await CandyRecord.findAll()
             console.log(candies);
             res.status(201).json({allData:candies});
    }
    catch(err){
        console.log(err,'Got some error')
        res.status(500).json({error:err});
       
    }
}






exports.editCandy= async (req,res,next)=>{
    const candyId=req.params.candyId;
    const updatedCandyName=req.body.candyname;
    
    const updatedDescription=req.body.description;
    const updatedPrice=req.body.price;
    const updatedQuantity=req.body.quantity;
try{

    let candy = await CandyRecord.findByPk(candyId)
         candy.candyname=updatedCandyName;
         candy.description=updatedDescription;
         candy.price=updatedPrice;
         candy.quantity= updatedQuantity;
         console.log(candy);
          let result= await  candy.save();
         
             console.log(result);
             res.send();
         
}
    catch(err){
        console.log(err);
    }
}
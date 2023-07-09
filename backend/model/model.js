const Sequelize=require('sequelize');
const sequelize=require('../utils/Database');

const CandyRecord = sequelize.define('candyshop',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },

  
    candyname:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    price:{
        type:Sequelize.STRING,
        allowNull:false,

    },

    quantity:{
        type:Sequelize.STRING,
        allowNull:false,

    }

});

module.exports=CandyRecord;
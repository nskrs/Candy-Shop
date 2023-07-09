const express=require('express');
const bodyParser = require('body-parser');
const candyRoutes=require('./routers/router');
const cors=require('cors');
const path=require('path');

const user = require('./model/users')

const userRoutes = require('./routers/user')

const sequelize=require('./utils/Database');

const app=express();
app.use(express.static(path.join(__dirname,'public')));

app.use(cors());


app.use(bodyParser.json({extended:false}));

app.use('/user',userRoutes)
 
app.use(candyRoutes);


sequelize.sync().then(result=>{
    console.log(result);
    app.listen(3000);

}).catch(err=>{
    console.log(err);
})
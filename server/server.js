///importing required modules
const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const User=require('./schema');
const Img=require('./schema2');
const Connection_URL="mongodb+srv://project_user:project1234@cluster0.8kyon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
///creating onject of express class
const app=express();
/// using body-parser as middle-ware
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
/// Connecting mangoatlas to mongoose
mongoose.connect(Connection_URL).then( ()=>{
    app.listen(5000,()=>{
        console.log(`listening to port number ${5000}`);
    })
}).catch((e)=>{
    console.log(e.message);
})

///Adding diff routes to the connection

/// main route "/"
app.get('/',(req,res)=>{
    ///res.send -> for sending string
    ///res.sendfile -> for sending file
    ///res.render -> for ejs file
    res.status('200');
    res.send('process success');

})
// post req for signin
app.post('/signin',async (req,res)=>{
    const data=req.body;
    const newuser=new User(data);
    try{
        await newuser.save();
        res.status(201).json(newuser);
    }catch(error){
        console.log('got');
        res.status(409).json( {message:error.message});
    }
    
})
/// post req for login in
app.post('/login', (req,res)=>{
     const data=req.body;
     console.log('in login');
     User.findOne({email:data.email,password:data.password},(err,dataobj)=>{
            console.log(dataobj);
            if(err){
                console.log('check');
                res.send({message:"incorrect"});
            }
            
            res.send({message:"Login successful",dataobj});
            
     });
})
/// params
app.get('/login/:userid',(req,res)=>{
    const id=req.params.userid;
    console.log(req.params);
    User.findOne({_id:id},(err,dataobj)=>{
        console.log(dataobj);
        if(err){
            console.log('check');
            res.send({message:"incorrect"});
        }
        
        res.send({message:"Login successful",dataobj});
        
 });
})
/// schema for posts
app.post('/create/:id',async (req,res)=>{
    const data=req.body;
    const newuser=new User(data);
    console.log('ji');
    console.log(req.body);
    try{
        await newuser.save();
        res.status(201).json(newuser);
    }catch(error){
        console.log('got');
        res.status(409).json( {message:error.message});
    }
});




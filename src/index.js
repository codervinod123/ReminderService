const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

const SimpleMailRepository=require('./repository/simpleMail-repository');;
const senderrr=new SimpleMailRepository();

const startReminderService=()=>{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const appRouter=require('./routes/index');
    
    app.listen(PORT,()=>{
        
        app.use('/api',appRouter);
       
        console.log(`Server has started on port no ${PORT}`)
        
    })
    

}

startReminderService();


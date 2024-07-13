const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');



const startReminderService=()=>{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const appRouter=require('./routes/index');
    app.use('/api',appRouter);


    const EmailController=require('./controllers/email-controller');
    
    const EmailService =require('./services/email-service');
    const serrrrr=new EmailService(); 

    const simpleMailSender=require('./helper/emailjobs');
    
    app.listen(PORT,async()=>{

         app.get('/api/v1/reminder', EmailController.getAll);
         app.post('/api/v1/reminder', EmailController.create);

         simpleMailSender();
       
        // CronJob.from({
        //     cronTime: '*/1 * * * *',
        //     onTick:async function () {
        //          await senderrr.simpleMailSender();
        //     },
        //     start: true,
        //     timeZone: 'America/Los_Angeles'
        // });

        console.log(`Server has started on port no ${PORT}`)   
    })
    

}

startReminderService();


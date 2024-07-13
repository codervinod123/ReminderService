const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const { CronJob }=require('cron');

const startReminderService=()=>{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const appRouter=require('./routes/index');
    app.use('/api',appRouter);

   
    const SimpleMailRepository=require('./repository/simpleMail-repository');;
    const senderrr=new SimpleMailRepository();

    
    app.listen(PORT,async()=>{

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


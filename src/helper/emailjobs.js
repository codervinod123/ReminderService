const EmailService=require('../services/email-service');
const emailService=new EmailService(); 
const sender=require('../config/emailConfig');

const simpleMailSender = async () => {
    try {
        const response=await emailService.getAll();
            response.forEach(data => {
                sender.sendMail({
                    from: 'vinodgen630@gmail.com',
                    to: data.mailTo,
                    subject:data.subject,
                    text:data.mailText
                })
            });
       return response;
    } catch (error) {
       console.log('Error occured at mail Sender Repo',error);
    }
}

module.exports=simpleMailSender;

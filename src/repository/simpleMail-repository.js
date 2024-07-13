const sender=require('../config/emailConfig');

class SimpleMailRepository {

    async simpleMailSender(data) {
        try {
            const response=await sender.sendMail({
                    from: 'vinodgen630@gmail.com',
                    to: 'vinodpr737947@gmail.com',
                    subject:'Testing fro the email services',
                    text:'Testing from vinod side to check that ther reminder service is working totally fine'
                })

            return response;

        } catch (error) {
           console.log('Error occured at mail Sender Repo');
           throw {error};
        }
    }


}

module.exports=SimpleMailRepository;
const sender=require('../config/email');

class SimpleMailRepository {

    async simpleMailSender(data) {
        try {
            const response=await sender.sendMail({
                    from: 'vinodgen630@gmail.com',
                    to: 'vinodpr737947@gmail.com',
                    subject:'Subject',
                    text:'Testing'
                })

            return response;

        } catch (error) {
           console.log('Error occured at mail Sender Repo');
           throw {error};
        }
    }


}

module.exports=SimpleMailRepository;
const sender=require('../config/emailConfig');
const ReminderticketRepository=require('../repository/reminderticketrepository');
const reminderticketRepository=new ReminderticketRepository();

class EmailService {

    async createReminder(data){
        try {
            const response=await reminderticketRepository.createReminder(data);
            return response;
        } catch (error) {
            console.log('Error has occured from Service Layer');
            throw {error}; 
        }
    }

    async getAll(){
        try {
            const response=await reminderticketRepository.getAll();
            return response;
        } catch (error) {
            console.log('Error has occured from Service Layer');
            throw {error}; 
        }
    }


}

module.exports=EmailService;
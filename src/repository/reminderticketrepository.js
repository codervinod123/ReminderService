const {Reminderticket}=require('../models/index');
const {Op}=require('sequelize');
      
class ReminderticketRepository{

      async createReminder(data){
        try {
            const response=await Reminderticket.create(data);
            return response;
        } catch (error) {
           console.log('Some error has occured'); 
            throw {error}   
        }
      }

      async getAll(){
        try {
            const response=await Reminderticket.findAll({
              where:{
                status:'PENDING',
                reminderTime: {
                  [Op.lte]: new Date()
                }
              }
            });
            return response;
        } catch (error) {
            console.log('Some error has occured in repoooo'); 
            throw {error}   
        }
      }

     
}

module.exports=ReminderticketRepository;
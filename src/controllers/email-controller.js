const EmailService=require('../services/email-service');
const emailService=new EmailService();

const getAll=async(req,res)=>{
    try {
        const response=await emailService.getAll();
        return res.status(200).json({
            data:response,
            message:'All the reminder ticket has fetched successfully',
            success:true,
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:'Reminder ticket can not fetched successfully',
            success:false,
            error: error
        })
    }
}



const create=async(req,res)=>{
    try {
        const response=await emailService.createReminder(req.body);
        return res.status(200).json({
            data:response,
            message:'Reminder ticket has Created successfully',
            success:true,
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:'Reminder ticket can not Created successfully',
            success:false,
            error: error
        })
    }
}



module.exports={
    getAll,
    create
}
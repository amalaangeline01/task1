const service = require('./service')
const csv = require('csvtojson')
const empdata=async(req,res)=>{
    
    try{
        if(!req.file){
            res.send({code:404,message:"please upload csv file...!"})
            return console.log('kindly select and upload csv file')
            
        }
        let path="./files/"+req.file.filename
        const empdetails=await csv().fromFile(path)
        
    
        
        for (const item of empdetails){
            const save =await service.saveemp(item);
            
            
        
        }res.send({status:200,success:true ,message:"uploaded succesfully"})
    }catch(error){
        res.send({message:error,status:"not uploaded"})
    
    }  
}
const showaadhar=async(req,res)=>
{
    const fetchdetails=await service.aadhardata(req.body.Aadhar_No)
    res.send(fetchdetails)
}

const updatedetails = async(req,res)=>
{
    const update = await service.updateaadhar(req.body)
    res.send(update)
}
const getonroll=async(req,res)=>
{
    const display=await service.getdetails(req.body)
    res.send(display)
}
const countdata=async(req,res)=>
{
    try{
        const count=await service.count(req.body);
        res.send({success:true,count});

    }catch (error)
    {
        res.send({success:false,message:'Internal server error.'});
    }
}

module.exports=
{
    empdata ,
    showaadhar,
    updatedetails,
    getonroll,
    countdata
}
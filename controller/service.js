const mongoose=require('mongoose')
const empschema=new mongoose.Schema(
    {
    Empid:String,
    Createdon:String,
    Name: String,
    Father_Name: String,
    Date_of_Join: String,
    M2_Permenant_Date: String,
    Date_of_Resignation: String,
    Date_of_Birth: String,
    Mobile_NO: String,
    Postal_Address: String,
    Name_of_Nominee: String,
    Salary: String,
    Designation: String,
    Aadhar_No: String,
    PAN: String,
    Bank_AC_Number: String,
    IFSC_code: String,
    Emp_status: String,
    Company_Name: String
    }
)
const savedata=new mongoose.model('savefile',empschema)
const saveemp=async(data)=>
{
if(data.length!==0){
    const existingemp=await savedata.findOne({Aadhar_No:data.Aadhar_No})
    if(existingemp)
{
    return false
}
else
 {
        const date = new Date();
        const  Empid = date.toISOString().slice(0,10).replace('-','').replace('-','')

    
        const count = await savedata.countDocuments({'Createdon':Empid})
 }
    data.Empid = Empid+(count+1)
 
    const empdata=new saveemp(data)
    const send=await empdata.save()
    return send

}
}
const aadhardata=async(info)=>
{
    const show=await savedata.findOne({Aadhar_No:info.Aadhar_No})
    return show
}
const updateaadhar=async(set)=>
 {
    const updatebyaadhar=await savedata.updateMany
    ({"Aadhar_No":set.Aadhar_No},
    {$set:
        {
            "Name":set.Name,
            "Father_Name":set.Father_Name,
            "Date_of_Join":set.Date_of_Join,
            "M2_Permenant_Date":set.M2_Permenant_Date,
            "Date_of_Resignation":set.Date_of_Resignation,
            "Date_of_Birth":set.Date_of_Birth,
            "Mobile_NO":set.Mobile_NO,
            "Postal_Address":set.Postal_Address,
            "Name_of_Nominee":set.Name_of_Nominee,
            "Salary":set.Salary,
            "Designation":set.Designation, 
            "Bank_AC_Number":set.Bank_AC_Number,
            "IFSC_code":set.IFSC_code,
            "Emp_status":set.Emp_status,
         "Company_Name":set.Company_Name
    }
    })
    return updatebyaadhar
}
const getdetails=async(data)=>
{
    const getdata=await savedata.find({Emp_status:data.Emp_status})
    return getdata
}
const count=async(data)=>
{
    const empcount=await savedata.count({Emp_status:data.Emp_status})
    return empcount
}



module.exports=

{
    saveemp,
aadhardata,
updateaadhar,
getdetails,
count

}
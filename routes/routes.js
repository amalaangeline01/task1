const exp = require('express')
const router = exp.Router()
const savedata = require('../controller/index')
const multer = require('../middleware/multer')
const route = (index)=>
{
  
    router.post('/upload',multer.single("upload"),savedata.empdata);
    
    router.post('/findaadhar',savedata.showaadhar);
    router.post('/aadharupdate',savedata.updatedetails);
    router.post('/empstatus',savedata.getonroll);
    router.post('/empcount',savedata.countdata);
index.use('/api',router)
}
module.exports =
 route
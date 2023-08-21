const app=require("express")();
const body=require('body-parser');

app.use(body.urlencoded({extended:true}));
app.use(body.json());
require('dotenv').config()
require('./config/db')
require('./routes/routes')(app)
const port=3000;

 app.listen(port,()=>
 {
    console.log(`server listening on port:${port}`);
});
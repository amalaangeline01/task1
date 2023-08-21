const mongoose=require('mongoose')
const dbURL=process.env.dbURL
mongoose.connect(dbURL, {
    useNewUrlparser:true,
    useUnifiedTopology:true,
    // useFindAndmodify:false,
    // useCreateIndex: true
})
mongoose.connection.on('connected', ()=>{
    console.log('mongoose connected');
})
mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose disconnected');
});
mongoose.connection.on('error',(err)=>{
    console.log(`Error while connecting ${err}`);
});
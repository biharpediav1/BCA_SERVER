import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://xarmydev_db_user:mV0bb0P55F6Djcl9@cluster0.oerilli.mongodb.net/bca_db?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI).then(()=>{
    console.log('MongoDB Connection Succeeded.')
}).catch((error)=>{
    console.log('Error in DB connection: ' + error)
})



export default mongoose ;
 
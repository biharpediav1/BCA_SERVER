import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://biharpediain:katsa123muku@cluster0.ltgkwtv.mongodb.net/bca?retryWrites=true&w=majority';

mongoose.connect(mongoURI).then(()=>{
    console.log('MongoDB Connection Succeeded.')
}).catch((error)=>{
    console.log('Error in DB connection: ' + error)
})



export default mongoose ;
 
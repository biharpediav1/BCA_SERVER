import express, { Request, Response } from 'express';
import index_router from './router/index';
import cors from 'cors';
const app = express();
const port = 4000;
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

// Middleware to parse JSON
app.use(express.json());
const allowedOrigins = [
  "http://localhost:3000",  
  "http://192.168.186.105:3000",
  "https://bca-react-git-main-biharpediav1s-projects.vercel.app"  
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
// Basic route
app.use('/api',index_router);
app.get('/',(req:any,res:any)=>{
    res.status(200).json({data:"4000"})
})   

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
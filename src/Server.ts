// import express, { Request, Response } from 'express';
// import index_router from './router/index';
// import cors from 'cors';
// const app = express();
// const port = 4000;
// const vision = require('@google-cloud/vision');
// const client = new vision.ImageAnnotatorClient();

// // Middleware to parse JSON
// app.use(express.json());
// const allowedOrigins = [
//   "http://localhost:3000",     
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// }));
// // Basic route
// app.use('/api',index_router);
// app.get('/',(req:any,res:any)=>{
//     res.status(200).json({data:"4000"})
// })   


// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
import express, { Request, Response } from 'express';
import index_router from './router/index';
import cors from 'cors';
import { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const allowedOrigins = ["http://localhost:3000","https://bca-server-2-git-main-biharpediav1s-projects.vercel.app"];

app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use('/api', index_router);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ data: "Server is live on Vercel!" });
});

// ✅ Instead of listen(), export the handler
const handler = app as any;

export default function (req: VercelRequest, res: VercelResponse) {
  return handler(req, res);
}

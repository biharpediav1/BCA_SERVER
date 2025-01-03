import express, { Request, Response } from 'express';
import index_router from './router/index';
import cors from 'cors';
const app = express();
const port = 4000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// Basic route
app.use('/api',index_router);
app.get('/',(req:any,res:any)=>{
    res.status(200).json({data:"4000"})
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

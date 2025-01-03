const express = require("express");
const index_router = express.Router();
import bca1 from './bca1';

index_router.use('/bca1', bca1);



export default index_router;
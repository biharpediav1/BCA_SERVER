const express = require('express');
const router = express.Router();
import { get_Subject2, get_Subject1, get_Subject4, get_Subject3, get_Subject5, get_Subject7, set_on_database_question, get_Subject6 } from '../controller/bca1_controller';


router.post('/get_Subject1', get_Subject1);
router.post('/get_Subject2', get_Subject2);
router.post('/get_Subject3', get_Subject3);
router.post('/get_Subject4', get_Subject4);
router.post('/get_Subject5', get_Subject5);
router.post('/get_Subject6', get_Subject6);
router.post('/get_Subject7', get_Subject7);
router.post('/set_on_database_question', set_on_database_question);




export default router;

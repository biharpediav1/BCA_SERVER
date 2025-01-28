const express = require('express');
const router = express.Router();
import {get_c_change,get_c_c_plus,get_C_Skill,get_C_S_P,get_m_health,get_Web,set_on_database_question,get_Math} from '../controller/bca1_controller';

 
router.post('/get_c_change',get_c_change);
router.post('/get_c_c_plus',get_c_c_plus);
router.post('/get_C_skill',get_C_Skill);
router.post('/get_c_s_p',get_C_S_P);
router.post('/get_m_health',get_m_health);
router.post('/get_web',get_Web);
router.post('/get_math',get_Math);
router.post('/set_on_database_question',set_on_database_question);




export default router;

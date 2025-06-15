import mongoose from "../../database/database";


const yourSchema = new mongoose.Schema({
    Question_Content: String,
    Option1: String,
    Option2: String,
    Option3: String,
    Correct: String,
});

const M_health = mongoose.model('management', yourSchema);

export default M_health;
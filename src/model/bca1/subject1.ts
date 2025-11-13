import mongoose from "../../database/database";


const yourSchema = new mongoose.Schema({
    Question_Content: String,
    Option1: String,
    Option2: String,
    Option3: String,
    Correct: String,
});

const Subject1 = mongoose.model('os_system', yourSchema);

export default Subject1;
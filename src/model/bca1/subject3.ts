import mongoose from "../../database/database";


const yourSchema = new mongoose.Schema({
    Question_Content: String,
    Option1: String,
    Option2: String,
    Option3: String,
    Correct: String,
});

const Subject3 = mongoose.model('digital_elec', yourSchema);

export default Subject3;
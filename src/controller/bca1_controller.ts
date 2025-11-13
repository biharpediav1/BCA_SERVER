import { Request, Response } from 'express';
import Subject2 from '../model/bca1/subject2';
import Subject1 from '../model/bca1/subject1';
import Subject4 from '../model/bca1/subject4';
import Subject3 from '../model/bca1/subject3';
import Subject5 from '../model/bca1/subject5';
import Subject7 from '../model/bca1/subject7';
import Subject6 from '../model/bca1/subject6';
import path from "path";
import fs from "fs";
import csvParser from "csv-parser";


import Fuse from 'fuse.js';

const get_Subject2 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject2.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject2:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_Subject1 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject1.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject1:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_Subject4 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject4.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject1:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_Subject3 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject3.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject1:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_Subject5 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject5.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject1:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_Subject7 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject7.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject1:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const get_Subject6 = async (req: Request, res: Response) => {
    try {
        // Extract the Question_Content from the request body
        const { Question_Content } = req.body;

        // Validate the query parameter
        if (!Question_Content) {
            return res.status(400).json({ message: "Missing required parameter: Question_Content" });
        }

        // Normalize Question_Content
        const normalizedQuestion = Question_Content.trim().replace(/\s+/g, ' ');

        // Fetch all documents (for fuzzy matching)
        const allQuestions = await Subject6.find({}, 'Question_Content Correct');

        // Use Fuse.js for fuzzy matching
        const fuse = new Fuse(allQuestions, {
            keys: ['Question_Content'], // Field to search on
            threshold: 0.4, // Adjust sensitivity (lower means stricter match)
        });

        const results = fuse.search(normalizedQuestion);

        // If no results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No close match found" });
        }

        // Extract the top match and return it
        const bestMatch = results[0].item;

        return res.status(200).json({
            message: true,
            data: {
                Question_Content: bestMatch.Question_Content,
                Correct: bestMatch.Correct,
            },
        });
    } catch (error) {
        console.error("Error from get_Subject1:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const set_on_database_question = async (req: Request, res: Response) => {
    // try {
    //   // Path to your CSV file
    //   const csvFilePath = path.join(__dirname, '..' ,"Python MCQ.csv");
  
    //   const dataToInsert: Array<Record<string, any>> = [];
  
    //   // Read and parse the CSV file
    //   fs.createReadStream(csvFilePath)
    //     .pipe(csvParser())
    //     .on("data", (row) => {
    //       dataToInsert.push(row); // Collect each row from the CSV
    //     })
    //     .on("end", async () => {
    //       // Insert the data into MongoDB
    //       await Subject6.insertMany(dataToInsert);
    //       res.status(200).json({ message: "Data inserted successfully!" });
    //     })
    //     .on("error", (error) => {
    //       console.error("Error reading CSV file:", error);
    //       res.status(500).json({ message: "Error reading CSV file", error });
    //     });
    // } catch (error) {
    //   console.error("Error inserting data:", error);
    //   res.status(500).json({ message: "Error inserting data", error });
    // }
  };

export { get_Subject2, get_Subject1, get_Subject4, get_Subject3, get_Subject5, get_Subject7,get_Subject6 ,set_on_database_question };

import { Request, Response } from 'express';
import C_Change from '../model/bca1/C_Change_model';
import C_C_plus from '../model/bca1/C_C++_model';
import C_Skill from '../model/bca1/C_Skill';
import C_S_P from '../model/bca1/C_S_P_model';
import M_health from '../model/bca1/M_health_model';
import Web from '../model/bca1/Web_model';
import Math from '../model/bca1/Math';
import path from "path";
import fs from "fs";
import csvParser from "csv-parser";


import Fuse from 'fuse.js';

const get_c_change = async (req: Request, res: Response) => {
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
        const allQuestions = await C_Change.find({}, 'Question_Content Correct');

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
        console.error("Error from get_c_change:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_c_c_plus = async (req: Request, res: Response) => {
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
        const allQuestions = await C_C_plus.find({}, 'Question_Content Correct');

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
        console.error("Error from get_C_C_plus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_C_Skill = async (req: Request, res: Response) => {
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
        const allQuestions = await C_Skill.find({}, 'Question_Content Correct');

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
        console.error("Error from get_C_C_plus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_C_S_P = async (req: Request, res: Response) => {
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
        const allQuestions = await C_S_P.find({}, 'Question_Content Correct');

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
        console.error("Error from get_C_C_plus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_m_health = async (req: Request, res: Response) => {
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
        const allQuestions = await M_health.find({}, 'Question_Content Correct');

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
        console.error("Error from get_C_C_plus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const get_Web = async (req: Request, res: Response) => {
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
        const allQuestions = await Web.find({}, 'Question_Content Correct');

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
        console.error("Error from get_C_C_plus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const get_Math = async (req: Request, res: Response) => {
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
        const allQuestions = await Math.find({}, 'Question_Content Correct');

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
        console.error("Error from get_C_C_plus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const set_on_database_question = async (req: Request, res: Response) => {
    try {
      // Path to your CSV file
      const csvFilePath = path.join(__dirname, '..' ,"Math_bca.csv");
  
      const dataToInsert: Array<Record<string, any>> = [];
  
      // Read and parse the CSV file
      fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on("data", (row) => {
          dataToInsert.push(row); // Collect each row from the CSV
        })
        .on("end", async () => {
          // Insert the data into MongoDB
          await Math.insertMany(dataToInsert);
          res.status(200).json({ message: "Data inserted successfully!" });
        })
        .on("error", (error) => {
          console.error("Error reading CSV file:", error);
          res.status(500).json({ message: "Error reading CSV file", error });
        });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ message: "Error inserting data", error });
    }
  };

export { get_c_change, get_c_c_plus, get_C_Skill, get_C_S_P, get_m_health, get_Web,get_Math ,set_on_database_question };

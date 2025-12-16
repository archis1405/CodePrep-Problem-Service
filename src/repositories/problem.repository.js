const logger = require('../config/logger.config');
const NotFound = require('../errors/notfound.error');
const { Problem } = require('../models');
const mongoose = require('mongoose');

class ProblemRepository{
    async createProblem(problemData){
        
        try {
            const problem = await Problem.create({
                title: problemData.title,
                descrption: problemData.description, 
                codeStubs: problemData.codeStubs,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });  
            return problem;

        }

        catch (error) {
            console.log(error);
            throw error;

        }
    }

    async getAllProblems(){
        try {
            
            const problems = await Problem.find({});
            return problems;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async getProblem(id) {
        try {
           
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new NotFound("Problem", id);
            }

            const problem = await Problem.findById(id);

            if (!problem) {
                throw new NotFound("Problem", id);
            }

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            

            const problem = await Problem.findByIdAndDelete(id);

            if (!problem) {
                 logger.error(`Problem with id : ${id} not found in the DB`)
                throw new NotFound("Problem", id);
            }

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updateData) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new NotFound("Problem", id);
            }

            const updatedProblem = await Problem.findByIdAndUpdate(
                id, 
                updateData, 
                { new: true, runValidators: true }
            );

            if (!updatedProblem) {
                logger.error(`Problem with id : ${id} not found in the DB`)
                throw new NotFound("Problem", id);
            }

            return updatedProblem;
        } catch (error) {
             logger.error(`deleteProblem error: ${error.message}`);
            throw error;
        }
    }

}

module.exports = ProblemRepository;
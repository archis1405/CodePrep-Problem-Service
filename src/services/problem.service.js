const { Problem } = require("../models");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
       
            
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log("Problem Data",problemData);
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("Problem Created",problem);

            return problem;
       
    }

    async getAllProblems(){
            
            const problems = await this.problemRepository.getAllProblems();
            return problems;

    }

    async getProblem(problemId){
            
            const problems = await this.problemRepository.getProblem(problemId);
            return problems;
            
    }

    async deleteProblem(problemId){
            
            const problem = await this.problemRepository.deleteProblem(problemId);
            return problem;
            
    }

    async updateProblem(problemId, updateData){
            
            // Sanitize description if it's being updated
            if (updateData.description) {
                updateData.description = sanitizeMarkdownContent(updateData.description);
            }

            console.log("Update Data", updateData);
            const updatedProblem = await this.problemRepository.updateProblem(problemId, updateData);
            
            console.log("Problem Updated", updatedProblem);
            return updatedProblem;
            
    }

}

module.exports = ProblemService;
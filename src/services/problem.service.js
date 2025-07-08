const { Problem } = require("../models");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
       
            //1. Sanitize the Markdown for the Description
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

    

}

module.exports = ProblemService;
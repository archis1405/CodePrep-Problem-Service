const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req , res){
    return res.json({message : 'Ping Problem Controller is alive'});
}

async function addProblem(req , res , next){
   try{
        console.log("Incoming Request body",req.body);
        const newproblem = await problemService.createProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
          success: true,
          message: 'Successfully created a problem',
          error: {},
          data: newproblem
        })
   }
   catch(error){
        next(error);
   }
}

async function getAllProblems(req , res , next){
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
          success: true,
          message: 'Successfully fetched all the problems',
          error: {},
          data: response
        });
   }
   catch(error){
        next(error);
   }
}

async function getProblem(req , res , next){
    try{
        const problem = await problemService.getProblem(req.params.id);

        return res.status(StatusCodes.OK).json({
          success: true,
          error: {},
          message: 'Successfully fetched a problem',
          data: problem
        })
   }
   catch(error){
        next(error);
   }
}

function updateProblem(req , res , next){
    try{
        //Not implemented 
        throw new NotImplemented('addProblem');
   }
   catch(error){
        next(error);
   }
}

async function deleteProblem(req , res , next){
    try{
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        
        return res.status(StatusCodes.OK).json({
          success: true,
          message: 'Successfully deleted',
          error: {},
          data: req.params.id
        })
   }
   catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'cannot delete the problem',
          error: error,
          data: req.params.id
        })
   }
}

async function deleteProblem(req , res , next){
    try{
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        
        return res.status(StatusCodes.OK).json({
          success: true,
          message: 'Successfully deleted',
          error: {},
          data: req.params.id
        })
   }
   catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'cannot delete the problem',
          error: error,
          data: req.params.id
        })
   }
}

module.exports = {
    addProblem,
    getProblem,
    getAllProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
};
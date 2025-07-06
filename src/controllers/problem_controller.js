const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req , res){
    return res.json({message : 'Ping Problem Controller is alive'});
}

function addProblem(req , res , next){
   try{
        //Not implemented 
        throw new NotImplemented('addProblem');
   }
   catch(error){
        next(error);
   }
}

function getProblem(req , res , next){
    try{
        //Not implemented 
        throw new NotImplemented('addProblem');
   }
   catch(error){
        next(error);
   }
}

function getAllProblems(req , res , next){
    try{
        //Not implemented 
        throw new NotImplemented('addProblem');
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

function deleteProblem(req , res , next){
    try{
        //Not implemented 
        throw new NotImplemented('addProblem');
   }
   catch(error){
        next(error);
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
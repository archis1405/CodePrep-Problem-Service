function pingProblemController(req , res){
    return res.json({message : 'Ping Problem Controller is alive'});
}

function addProblem(req , res){
    return res.json({message : 'Problem added successfully'});
}

function getProblem(req , res){
    return res.json({message : 'Problem retrieved successfully'});
}

function getAllProblems(req , res){
    return res.json({message : 'All problems retrieved successfully'});
}

function updateProblem(req , res){
    return res.json({message : 'Problem updated successfully'});
}

function deleteProblem(req , res){
    return res.json({message : 'Problem deleted successfully'});
}

module.exports = {
    addProblem,
    getProblem,
    getAllProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
};
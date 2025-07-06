const express = require('express');

const problemController = require('../../controllers/problem_controller');

const problemRouter = express.Router();
problemRouter.get('/ping', problemController.pingProblemController);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getAllProblems);

problemRouter.post('/', problemController.addProblem);

problemRouter.put('/:id', problemController.updateProblem);

problemRouter.delete('/:id', problemController.deleteProblem);




module.exports = problemRouter;
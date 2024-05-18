const NotImplemented = require('../errors/notImplemented.error');
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories')

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    return res.json({message:"Problem Controller is up"}); 
}

async function addProblem(req,res,next){
    try {
        const newProblem = await problemService.createProblem(req.body)
    } catch(error) {
        next(error);
    }
}

function getProblem(req,res){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

function getProblems(req,res){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

function deleteProblem(req,res){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

function updateProblem(req,res){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

module.exports = {
    addProblem,getProblem,getProblems,deleteProblem,updateProblem,pingProblemController
}
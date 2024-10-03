const NotImplemented = require('../errors/notImplemented.error');
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories')
const {StatusCodes} = require('http-status-codes')
// const {logger} = require('../config/logger.config.js')

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    // logger.error("ping error logs for ping controller")
    return res.status(200).json({message:"Problem Controller is up"}); 
}

async function addProblem(req,res,next){
    try {
        // console.log("incoming req body",req.body)
        const newproblem = await problemService.createProblem(req.body)
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : 'Successfully created a new problem',
            error : {},
            data : newproblem
        })
    } catch(error) {
        next(error);
    }
}

async function getProblem(req,res,next){
    try {
        // console.log(req.params.id)
        const response = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully fetched the problem",
            error : {},
            data : response,
        })
        
    } catch(error) {
        next(error);
    }
}

async function getProblems(req,res,next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully fetched all the problems",
            error : {},
            data : response,
        });
    } catch(error) {
        next(error);
    }
}

async function deleteProblem(req,res,next){
    try {
        const deleteProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully deleted the problem",
            error : {},
            data : deleteProblem,
        })
    } catch(error) {
        next(error);
    }
}

function updateProblem(req,res,next){
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
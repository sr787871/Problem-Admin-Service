const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badrequest.error');
const ForbiddenError = require('../errors/forbidden.error');
const PaymentRequiredError = require('../errors/payment.required.error');

function pingProblemController(req,res){
    return res.json({message:"Problem Controller is up"}); 
}

function addProblem(req,res,next){
    try {
        // nothing implemented
        throw new PaymentRequiredError();
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
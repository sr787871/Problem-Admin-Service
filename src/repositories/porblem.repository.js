const NotFound = require('../errors/not.found.error');
const {Problem} = require('../models')

class ProblemRepository{
    //constructing documents : An instance of a model is called a document.
    // INSIDE this we write the actual querry.
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                    title:problemData.title,
                    description:problemData.description,
                    testCases : (problemData.testCases) ? problemData.testCases : [],
            });
            return problem
        } catch (error) {
            throw error
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems; 
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem",id)
            }
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id){
        try {
        const problem = await Problem.findByIdAndDelete(id);
        if(!problem){
            throw new NotFound("Problem",id)
        }
        return problem;        
        } catch (error) {
            throw error;    
        }
    }
}

module.exports = ProblemRepository;
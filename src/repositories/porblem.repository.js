const {Problem} = require('../models')

class ProblemRepository{
    //constructing documents : An instance of a model is called a document.
    // INSIDE this we write the actual querry.
    async createProblem(problemData){
        try {
            throw err("something went wrong");
            const problem = await Problem.create({
                    title:problemData.title,
                    description:problemData.description,
                    testCases : (problemData.testCases) ? problemData.testCases : [],
            });
            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getAllProblems(){
        try {
            // throw "error";
            const problems = await Problem.find({});
            return problems; 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;
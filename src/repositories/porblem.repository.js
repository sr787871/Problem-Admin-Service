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
            console.log(error)
            throw error
        }
    }
}

module.exports = ProblemRepository;
const { markdownSanitizer } = require("../utils");

//core business logic exists in service layer
class ProblemService{
    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData){
        
            //1. sanititze the markdown for description
            problemData.description = markdownSanitizer(problemData.description)

            console.log("Problem Data",problemData)

            const problem = await this.ProblemRepository.createProblem(problemData);
            console.log("Problem",problem)
            return problem;
    }

    async getAllProblems(){        
            const problems = await this.ProblemRepository.getAllProblems();
            return problems;
    }
}

module.exports = ProblemService;
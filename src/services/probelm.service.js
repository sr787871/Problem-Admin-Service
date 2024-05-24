const { markdownSanitizer } = require("../utils");

//core business logic exists in service layer
class ProblemService{
    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData){
        
            //1. sanititze the markdown for description
            problemData.description = markdownSanitizer(problemData.description)
            const problem = await this.ProblemRepository.createProblem(problemData);
            return problem;
    }

    async getAllProblems(){        
            const problems = await this.ProblemRepository.getAllProblems();
            return problems;
    }

    async getProblem(problemId){
        const problem = await this.ProblemRepository.getProblem(problemId);
        return problem;
    }
}

module.exports = ProblemService;
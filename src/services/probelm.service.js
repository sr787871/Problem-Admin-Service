const { markdownSanitizer } = require("../utils");

//core business logic exists in service layer
class ProblemService{
    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData){
        try {
            //1. sanititze the markdown for description
            problemData.description = markdownSanitizer(problemData.description)
            const problem = await this.ProblemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;
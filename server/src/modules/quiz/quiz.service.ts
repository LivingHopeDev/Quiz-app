import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/createQuiz.dto";
import { Quiz } from "./quiz.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) { }

    getAllQuiz() {
        return 'All quizzes'
    }
    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: { id },
            relations: ['questions']
        })
    }
    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }
}
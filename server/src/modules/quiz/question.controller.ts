import { Controller, Post, UsePipes, Body, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { QuestionService } from "./question.service";
import { Question } from "./question.entity";
import { QuizService } from "./quiz.service";
@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService, private quizeService: QuizService) { }
    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto) {
        const quiz = await this.quizeService.getQuizById(question.quizId)
        return await this.questionService.createQuestion(question, quiz);
    }
}
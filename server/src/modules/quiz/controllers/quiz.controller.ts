import { Body, Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService
    ) { }


    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }
    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
        return await this.quizService.getQuizById(id)
    }
    @Post('/create')
    // @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}

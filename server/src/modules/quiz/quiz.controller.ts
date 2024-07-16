import { Body, Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { DataSource } from 'typeorm';


@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService
    ) { }


    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }
    @Get('/:id')
    getQuizById(@Param('id', ParseIntPipe) id: number) {
        return id
    }
    @Post('/create')
    // @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}

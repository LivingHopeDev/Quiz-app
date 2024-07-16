import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({ message: 'The quiz should have a title' })
    title: string

    @IsNotEmpty()
    @Length(3)
    description: string
}
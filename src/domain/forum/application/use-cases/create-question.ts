import { UniqueEntityId } from "~/core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";
import { IQuestionRepository } from "../repositories/question-repository";

interface CreateQuestionUseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

interface CreateQuestionUseCaseResponse {
  question: Question;
}

class CreateQuestionUseCase {
  constructor(private questionRepository: IQuestionRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      title,
      content,
    });

    await this.questionRepository.create(question);

    return { question };
  }
}

export { CreateQuestionUseCase };

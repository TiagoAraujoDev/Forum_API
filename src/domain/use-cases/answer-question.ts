import { UniqueEntityId } from "~/core/entities/unique-entity-id";

import { Answer } from "../entities/answer";
import { IAnswerRepository } from "../repositories/answer-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string
}

class AnswerQuestionUseCase {
  constructor(
    private answerRepository: IAnswerRepository
  ) { }
  
  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}

export { AnswerQuestionUseCase };

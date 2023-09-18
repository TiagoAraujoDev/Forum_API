import { AnswerQuestionUseCase } from "./answer-question";
import { IAnswerRepository } from "../repositories/answer-repository";
import { Answer } from "../entities/answer";

const fakeAnswerRepository: IAnswerRepository = {
  create: async (_: Answer) => {
    return;
  },
}

test("createa an answer", async () => {
  const sut = new AnswerQuestionUseCase(fakeAnswerRepository);
  const answer = await sut.execute({
    questionId: "",
    instructorId: "",
    content: "Content for testing"
  });

  expect(answer.content).toEqual("Content for testing");
});

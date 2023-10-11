import { Answer } from "../../enterprise/entities/answer";
import { IAnswerRepository } from "../repositories/answer-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswerRepository: IAnswerRepository = {
  create: async (answer: Answer) => {
    console.log(answer);
    return;
  },
};

test("createa an answer", async () => {
  const sut = new AnswerQuestionUseCase(fakeAnswerRepository);
  const { answer } = await sut.execute({
    questionId: "",
    instructorId: "",
    content: "Testing content",
  });

  expect(answer.content).toEqual("Testing content");
});

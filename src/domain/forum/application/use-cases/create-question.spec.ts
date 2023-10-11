import { Question } from "../../enterprise/entities/question";
import { IQuestionRepository } from "../repositories/question-repository";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionRepository: IQuestionRepository = {
  create: async (question: Question) => {
    console.log(question);
    return;
  },
};

test("createa a question", async () => {
  const sut = new CreateQuestionUseCase(fakeQuestionRepository);
  const { question } = await sut.execute({
    authorId: "1",
    title: "Testing title",
    content: "Testing content",
  });

  expect(question.content).toEqual("Testing content");
});


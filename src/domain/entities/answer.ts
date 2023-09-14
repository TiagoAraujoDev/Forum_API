import { Entity } from "../../core/entities/entity";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}

class Answer extends Entity<AnswerProps> {
  constructor(props: AnswerProps, id?: string) {
    super(props, id);
  };
  
  get content() {
    return this.props.content;
  }
  
}

export { Answer };

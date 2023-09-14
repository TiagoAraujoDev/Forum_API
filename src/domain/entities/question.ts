import { Entity } from "../../core/entities/entity";
import { Slug } from "./object-values/slug";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}

class Question extends Entity<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id)
  };
}

export { Question };

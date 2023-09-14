import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";
import { Slug } from "./object-values/slug";

interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  content: string;
  slug: Slug;
  createAt: Date;
  updateAt?: Date
}

class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, "createAt">, id?: UniqueEntityId) {
    const question = new Question({
      ...props,
      createAt: new Date()
    }, id);

    return question;
  }
}

export { Question };

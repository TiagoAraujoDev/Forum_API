import { Entity } from "../../core/entities/entity";

interface InstructorProps {
  name: string;
}

class Instructor extends Entity<InstructorProps> {
  constructor(props: InstructorProps, id?: string) {
    super(props, id);
  };
}

export { Instructor };

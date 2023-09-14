import { Entity } from "../../core/entities/entity";

interface StudentProps {
  name: string;
}

class Student extends Entity<StudentProps> {
  constructor(props: StudentProps, id?: string) {
    super(props, id)
  };
}

export { Student };

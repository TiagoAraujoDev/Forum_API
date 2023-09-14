import { UniqueEntityId } from "./unique-entity-id";

class Entity<Props> {
  private _id: UniqueEntityId;
  protected props: Props;
  
  constructor(props: Props, id?: string) {
    this._id = new UniqueEntityId(id);
    this.props = props;
  };

  get id() {
    return this._id
  }
}

export { Entity };

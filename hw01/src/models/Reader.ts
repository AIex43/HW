import { Copy } from "./Copy";

export class Reader {
  private _borrowed: Copy[] = [];

  constructor(
    private _id: string,
    private _name: string
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get borrowedCopies(): readonly Copy[] {
    return this._borrowed;
  }

  borrowCopy(copy: Copy): boolean {
    if (copy.borrow()) {
      this._borrowed.push(copy);
      return true;
    }
    return false;
  }

  returnCopy(copy: Copy): void {
    const idx = this._borrowed.indexOf(copy);
    if (idx >= 0) {
      this._borrowed.splice(idx, 1);
      copy.return();
    }
  }
}

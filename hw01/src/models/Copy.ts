import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
  constructor(
    title: string,
    year: number,
    private _author: Author
  ) {
    super(title, year);
    this._author.addBook(this);
  }

  get author(): Author {
    return this._author;
  }

  getDescription(): string {
    return `Physical book "${this.title}" by ${this.author.name} (${this.year})`;
  }
}

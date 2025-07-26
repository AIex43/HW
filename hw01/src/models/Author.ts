import { AbstractBook } from "./AbstractBook";

export class Author {
  private _books: AbstractBook[] = [];

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get books(): readonly AbstractBook[] {
    return this._books;
  }

  addBook(book: AbstractBook): void {
    this._books.push(book);
  }
}

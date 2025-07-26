import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  constructor(
    title: string,
    year: number,
    private _author: Author,
    private _url: string
  ) {
    super(title, year);
    this._author.addBook(this);
  }

  get author(): Author {
    return this._author;
  }

  get url(): string {
    return this._url;
  }

  getDescription(): string {
    return `E-book "${this.title}" by ${this.author.name} (${this.year}) - Available at: ${this.url}`;
  }
}

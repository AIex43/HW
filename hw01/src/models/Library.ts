import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

export class Library {
  private authors: Author[] = [];
  private books: AbstractBook[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  addAuthor(author: Author): void {
    this.authors.push(author);
  }

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  addCopy(copy: Copy): void {
    this.copies.push(copy);
  }

  addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  getAvailableCopies(): Copy[] {
    return this.copies.filter(c => c.isCopyAvailable());
  }

  findBooksByAuthor(author: Author): AbstractBook[] {
    return this.books.filter(b =>
      // порівнюємо за ім’ям, оскільки Author екземпляри можуть бути різні
      ("author" in b) && (b as any).author.name === author.name
    );
  }
}

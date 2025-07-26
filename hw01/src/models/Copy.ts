import { AbstractBook } from "./AbstractBook";

export class Copy {
  private _isAvailable: boolean = true;

  constructor(private _book: AbstractBook) {}

  get book(): AbstractBook {
    return this._book;
  }

  isCopyAvailable(): boolean {
    return this._isAvailable;
  }

  borrow(): boolean {
    if (!this._isAvailable) return false;
    this._isAvailable = false;
    return true;
  }

  return(): void {
    this._isAvailable = true;
  }
}

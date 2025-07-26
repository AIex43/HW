export abstract class AbstractBook {
  protected constructor(
    private _title: string,
    private _year: number
  ) {}

  get title(): string {
    return this._title;
  }

  get year(): number {
    return this._year;
  }

  abstract getDescription(): string;
}

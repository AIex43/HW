export class DocumentBuilder {
  private parts: { order: number; text: string }[] = [];
  private counter = 0;

  public addHeader(text: string): this {
    this.parts.push({ order: this.counter++, text: `=== ${text} ===` });
    return this;
  }

  public addBody(text: string): this {
    this.parts.push({ order: this.counter++, text });
    return this;
  }

  public addFooter(text: string): this {
    this.parts.push({ order: this.counter++, text });
    return this;
  }

  public build(): string {
    this.parts.sort((a, b) => a.order - b.order);
    return this.parts.map(p => p.text).join("\n\n");
  }
}

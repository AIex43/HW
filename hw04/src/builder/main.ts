import { DocumentBuilder } from "./DocumentBuilder";

const output = new DocumentBuilder()
  .addHeader("ACME Corporation — Report")
  .addBody("Quarterly performance increased by 12%.")
  .addFooter("--- Confidential ---")
  .build();

console.log(output);

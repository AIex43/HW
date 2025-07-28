

import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {

  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }
    return reader.borrowCopy(copy);
  }

   
  returnBook(reader: Reader, copy: Copy): boolean {
    const hasCopy = reader.borrowedCopies.includes(copy);
    if (!hasCopy) {
      return false;
    }
    reader.returnCopy(copy);
    return true;
  }
}

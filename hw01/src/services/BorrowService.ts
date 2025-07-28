import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {

  borrow(reader: Reader, copy: Copy): void {
    if (!copy.getAvailability()) {
      throw new Error("Цей примірник уже позичений!");
    }


    copy.borrow();


    reader.borrowCopy(copy);
  }


  return(reader: Reader, copy: Copy): void {

    copy.return();


    const borrowed = reader.getBorrowedCopies();
    const index = borrowed.indexOf(copy);
    if (index !== -1) {
      borrowed.splice(index, 1);
    }
  }
}

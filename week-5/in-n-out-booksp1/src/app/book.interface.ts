// Name: Jocelyn Dupuis
// File: book.interface.ts
// Date: 11/14/2023
// Description: TS file for book interface

// export Ibook interface
export interface Ibook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

/**
 * Title: book.interface.ts
 * Author: Lucas Hoffman
 * Date: Feb 4, 2022
 * Description: book.interface.ts file for in-n-out-books
 */

 export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

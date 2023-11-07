This code is an implementation of a simple library management system. It involves multiple classes and functions to create, display, update, and delete library items, as well as manage borrowing and returning books. Please note that this code is fictional and simplified for the purpose of this task, and would require further development and error handling for a production-level system.

```javascript
// LibraryManagementSystem.js

// Define the Book class
class Book {
  constructor(title, author, year, id) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = id;
    this.available = true;
  }
}

// Define the Library class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  displayBooks() {
    console.log(`All Books in ${this.name}:`);
    this.books.forEach((book) => {
      console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
    });
  }
}

// Define the Borrower class
class Borrower {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(bookId, library) {
    const book = library.books.find((book) => book.id === bookId);

    if (book && book.available) {
      book.available = false;
      this.borrowedBooks.push(book);
      console.log(`${this.name} borrowed "${book.title}" from ${library.name}`);
    } else {
      console.log(`Book with ID ${bookId} is not available in ${library.name}`);
    }
  }

  returnBook(bookId, library) {
    const bookIndex = this.borrowedBooks.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
      const book = this.borrowedBooks.splice(bookIndex, 1)[0];
      book.available = true;
      library.addBook(book);
      console.log(`${this.name} returned "${book.title}" to ${library.name}`);
    } else {
      console.log(`${this.name} does not have a book with ID ${bookId}`);
    }
  }

  displayBorrowedBooks() {
    console.log(`${this.name}'s Borrowed Books:`);
    this.borrowedBooks.forEach((book) => {
      console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
    });
  }
}

// Create a new library
const myLibrary = new Library("My Library");

// Create some books
const book1 = new Book("Book 1", "Author 1", 2000, "B1");
const book2 = new Book("Book 2", "Author 2", 2010, "B2");
const book3 = new Book("Book 3", "Author 3", 2015, "B3");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Display all books in the library
myLibrary.displayBooks();

// Create a borrower
const borrower = new Borrower("John");

// Borrow a book
borrower.borrowBook("B2", myLibrary);

// Display all borrowed books of the borrower
borrower.displayBorrowedBooks();

// Return the borrowed book
borrower.returnBook("B2", myLibrary);

// Display all books in the library after returning
myLibrary.displayBooks();
```

This code creates a library management system where you can create a library, add books to it, borrow books as a borrower, return books, and display information about the books and borrowers.
let myLibrary = [];

const booksTable = document.getElementById("books")
const createTable = (array) => {
    for (let objects of array) {
        let row = booksTable.insertRow(1)
        for(let [key, value] of Object.entries(objects)) {
            let cell = row.insertCell(0);
            cell.innerHTML = value;
        }
    }
}

//constructor
class Book {
    constructor(title, author, pages, isread) {
    this.isread = isread;
    this.pages = pages;
    this.title = title;
    this.author = author;
    }
    info() { `${this.title} by ${this.author}, ${this.pages} pages, ${this.isread}` }
    addTable() {let row = booksTable.insertRow(1)
            let cell0 = row.insertCell(0);
            cell0.innerHTML = this.isread;
            let cell1 = row.insertCell(0)
            cell1.innerHTML = this.pages
            let cell2 = row.insertCell(0);
            cell2.innerHTML = this.title;
            let cell3 = row.insertCell(0);
            cell3.innerHTML = this.author
        }
    }

// do stuff
    function addBookToLibrary(title) {
    myLibrary.push(title)
 }

const addBook = document.getElementById('send')

addBook.addEventListener('click', e = () => {
    let newAuthor = document.getElementById('authorinput').value;
    let newTitle = document.getElementById('titleinput').value;
    let newPages = document.getElementById('pagesinput').value;
    let newIsread = document.getElementById('isreadinput').value;
    let newBook = new Book(newTitle, newAuthor, newPages, newIsread);
    addBookToLibrary(newBook);
    newBook.addTable();
    }
 )





const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not read')
const martian = new Book('The Martian', 'Andy Weir', 369, "Read")

addBookToLibrary(hobbit);
addBookToLibrary(martian)

createTable(myLibrary);
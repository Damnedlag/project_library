let myLibrary = [];

const booksTable = document.getElementById("books")
const createTable = (array) => {
    for (let objects of array) {
        i = 1;
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
//  readinfo() {if (this.isread) {return "Read"} else {return "Haven't been read yet"}}
    info() { `${this.title} by ${this.author}, ${this.pages} pages, ${this.readinfo()}` }
    }

// do stuff
    function addBookToLibrary(title) {
    myLibrary.push(title)
 }

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not read')
const martian = new Book('The Martian', 'Andy Weir', 369, "Read")

addBookToLibrary(hobbit);
addBookToLibrary(martian)

createTable(myLibrary);
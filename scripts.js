let myLibrary = [];
let titles = [];

const booksTable = document.getElementById("books")

const rmvBook = (removableTitle) => {
    console.log(removableTitle)
    let index = myLibrary.map(function(e) {return e.title }).indexOf(removableTitle);
    myLibrary.splice(index,1);
    let index2 = titles.indexOf(removableTitle);
    titles.splice(index2,1);
    }


//constructor
class Book {
    constructor(title, author, pages, isread) {
    this.isread = isread;
    this.pages = pages;
    this.title = title;
    this.author = author;
    titles.push(this.title);
    }
    info() { `${this.title} by ${this.author}, ${this.pages} pages, ${this.isread}` }
    addTable() {
        let row = booksTable.insertRow(1);
            row.id = this.title;
            let rmvcell = row.insertCell(0);
            let rmvbutton = document.createElement('button')
            rmvcell.appendChild(rmvbutton);
            rmvcell.classList = "rmvcell"
            rmvbutton.classList = "rmvbutton"
            rmvbutton.textContent = "X";
            let cell0 = row.insertCell(0);
            cell0.innerHTML = this.isread;
            let cell1 = row.insertCell(0);
            cell1.innerHTML = this.pages;
            let cell2 = row.insertCell(0);
            cell2.innerHTML = this.title;
            let cell3 = row.insertCell(0);
            cell3.innerHTML = this.author;

            rmvbutton.addEventListener('click', e = () => {
                let i = document.getElementById(this.title).rowIndex;
                booksTable.deleteRow(i);
                rmvBook(myLibrary, this.title)
            })
    
    
    }}

// do stuff
    function addBookToLibrary(title) {
    myLibrary.push(title)
    title.addTable();
 }

const addBook = document.getElementById('send')

addBook.addEventListener('click', e = () => {
    let newAuthor = document.getElementById('authorinput').value;
    let newTitle = document.getElementById('titleinput').value;
    for (const title of titles) {
        console.log(newTitle)
        if (newTitle === title) { 
            console.log(title)
            return alert("This book is already in the library!")}
    }
    let newPages = document.getElementById('pagesinput').value;
    let newIsread = document.getElementById('isreadinput').value;
    let newBook = new Book(newTitle, newAuthor, newPages, newIsread);
    addBookToLibrary(newBook);
    }
 )





const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not read')
const martian = new Book('The Martian', 'Andy Weir', 369, "Read")

addBookToLibrary(hobbit);
addBookToLibrary(martian)
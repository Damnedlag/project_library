let myLibrary = [];
let titles = [];

const booksTable = document.getElementById("books")

//constructor
class Book {
    constructor(title, author, pages, isread) {
    this.isread = isread;
    this.pages = pages;
    this.title = title;
    this.author = author;
    titles.push(this.title);
    }
    info() { return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isread}` }
    addTable() {
        let row = booksTable.insertRow(1);
            row.id = this.title;

            //remove book row buttons
            let rmvcell = row.insertCell(0);
            let rmvbutton = document.createElement('button')
            rmvcell.appendChild(rmvbutton);
            rmvcell.classList = "rmvcell"
            rmvbutton.classList = "rmvbutton"
            rmvbutton.textContent = "X";

            //status-row buttons
            let statuscell = row.insertCell(0);
            let statusButton = document.createElement('button')
            statuscell.appendChild(statusButton);
            statuscell.classList = "statuscell"
            statusButton.classList = "statusbutton";
            statusButton.textContent = this.isread;
            this.isread == "Read" ? statuscell.style.backgroundColor = "green" : statuscell.style.backgroundColor = "red"

            //list rows
            let cell0 = row.insertCell(0);
            cell0.innerHTML = this.pages;
            let cell1 = row.insertCell(0);
            cell1.innerHTML = this.title;
            let cell2 = row.insertCell(0);
            cell2.innerHTML = this.author;

            //eventlisteners for the buttons in the list
            rmvbutton.addEventListener('click', e = () => {
                let i = document.getElementById(this.title).rowIndex;
                booksTable.deleteRow(i);
                rmvBook(this.title)
            })
            
            statusButton.addEventListener('click', e = () => {
                let index = myLibrary.map(function(e) {return e.title }).indexOf(this.title);
                myLibrary[index].isread === "Read" ? myLibrary[index].isread = "Unread" : myLibrary[index].isread = "Read";
                populateStorage();
                statusButton.textContent = myLibrary[index].isread;
                console.log(this.isread)
                myLibrary[index].isread == "Read" ? statuscell.style.backgroundColor = "green" : statuscell.style.backgroundColor = "red";
            })
    }}

// ads books to the library
 function addBookToLibrary(title) {
    title.addTable();
 }
//removes book from the library
 const rmvBook = (removableTitle) => {
    let index = myLibrary.map(function(e) {return e.title }).indexOf(removableTitle);
    myLibrary.splice(index,1);
    let index2 = titles.indexOf(removableTitle);
    titles.splice(index2,1);
    populateStorage();
}
//updates status
//  const changeStatus = (updatableTitle) => {
//     let index = myLibrary.map(function(e) {return e.title }).indexOf(updatableTitle);
//     myLibrary[index].isread === "Read" ? myLibrary[index].isread = "Unread" : myLibrary[index].isread = "Read";
//     populateStorage();
// }

 //function to handle input from the form
const addBook = document.getElementById('send')
addBook.addEventListener('click', e = () => {
    let newAuthor = document.getElementById('authorinput').value;
    let newTitle = document.getElementById('titleinput').value;
    for (const title of titles) {
        if (newTitle === title) { 
            return alert("This book is already in the library!")}
    }
    let newPages = document.getElementById('pagesinput').value;
    let newIsread = document.getElementById('isreadinput').value;
    let newBook = new Book(newTitle, newAuthor, newPages, newIsread);
    addBookToLibrary(newBook);
    myLibrary.push(newBook);
    populateStorage();
    }
 )

function populateStorage() {
    if(!localStorage.getItem('myLibrary')) {
    //books for demo
    const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Unread')
    const martian = new Book('The Martian', 'Andy Weir', 369, "Read")

    addBookToLibrary(hobbit);
    addBookToLibrary(martian);
    myLibrary.push(hobbit);
    myLibrary.push(martian);
    }
    let myLibrary_serialized = JSON.stringify(myLibrary);
    localStorage.setItem('myLibrary', myLibrary_serialized);
}

function setLibrary() {
    let myLibrary_deserialized = JSON.parse(localStorage.getItem('myLibrary'));
    myLibrary = myLibrary_deserialized;
    myLibrary.map(function(e) { let elem = new Book(e.title, e.author, e.pages, e.isread); 
    addBookToLibrary(elem);
})
}

if(!localStorage.getItem('myLibrary')) {
    populateStorage();
  }
  else {
    console.log('van')
    setLibrary();
  }

//books for demo
// const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Unread')
// const martian = new Book('The Martian', 'Andy Weir', 369, "Read")

// addBookToLibrary(hobbit);
// addBookToLibrary(martian)
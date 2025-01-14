const shelf = document.querySelector(".shelf");
const form = document.getElementById("bookFrom");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addBook");


document.addEventListener("DOMContentLoaded", function() {
    addBookToLibrary();
    
    //setInterval(removeBooks, 10000);
})

showButton.addEventListener("click", () => {
    dialog.showModal();
})

const myLibrary = []

function Book() {
    
}

//Create Book object from Form input
function addBookToLibrary() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const bookDetails = new FormData(form);
        const addbook = new Book();
    
        for (const [key, value] of bookDetails.entries()) {
            addbook[key] = value;    
        }
    
        myLibrary.push(addbook);
        
        //console.log(myLibrary);
    
        form.reset();

        dialog.close();

        displayBook(addbook);

        //removeBooks();
    });
    
}

//Create book element to display on shelf
function displayBook(addBook) {
        let bookOnShelf = document.createElement("div");
        bookOnShelf.classList.add("bookAdded");
        bookOnShelf.id = addBook.bookTitle;
        let id = addBook.bookTitle;
        
        let bookHeight = 150/9;
        let bookWidth = 100/9;
        
        bookOnShelf.style.height = `${bookHeight}vh`;
        bookOnShelf.style.width = `${bookWidth}vh`;
        
        shelf.appendChild(bookOnShelf);
        //console.log(addBook);

        let newBook = document.getElementById(id);

        let title = document.createElement("p")
        title.textContent = addBook.bookTitle;

        newBook.appendChild(title);

        let finished = document.createElement("button");
        

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeBook");
        removeButton.id = id;
        removeButton.textContent = "Remove";

        newBook.appendChild(removeButton);

        const removeBook = document.getElementById(id);
        removeBook.addEventListener("click", (event) => {
            console.log(event.target.id);
            const removeElements = document.getElementById(event.target.id)
            removeElements.remove();
        })
}

function removeBooks (){
    const remove = document.querySelectorAll(".removeBook");
    remove.forEach((book) => {
        book.addEventListener("click", (event) => {
            console.log(event.target.id);
           
        })
    })
}


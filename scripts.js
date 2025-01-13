const shelf = document.querySelector(".shelf");
const form = document.getElementById("bookFrom");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addBook")


document.addEventListener("DOMContentLoaded", function() {
    addBookToLibrary();
    
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
        
        console.log(myLibrary);
    
        form.reset();

        dialog.close();

        displayBook(addbook);
    });
}

//Create book element to display on shelf
function displayBook(addBook) {
        let bookOnShelf = document.createElement("div");
        bookOnShelf.classList.add("bookAdded");
        
        let bookHeight = 150/9;
        let bookWidth = 100/9;
        
        bookOnShelf.style.height = `${bookHeight}vh`;
        bookOnShelf.style.width = `${bookWidth}vh`;
        
        shelf.appendChild(bookOnShelf);
        console.log(addBook);

        let newBook = document.querySelector(".bookAdded")

        let title = document.createElement("p")
        title.textContent = addBook.bookTitle

        newBook.appendChild(title);

        let remove = document.createElement("button");
        remove.classList.add("removeBook");
        remove.textContent = "Remove";

        newBook.appendChild(remove);
}
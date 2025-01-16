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
        
        bookOnShelf.style.height = '10vh';
        bookOnShelf.style.width = '10vh';
        
        if(addBook.read_status == 'yes'){
            bookOnShelf.style.border = '4px solid #16a34a';
        }else{
            bookOnShelf.style.border = '4px solid #dc2626';
        }

        shelf.appendChild(bookOnShelf);
        console.log(addBook);

        let newBook = document.getElementById(id);
        
        let finished = document.createElement("button");
        finished.classList.add("readStatus");
        finished.id = "F" + id;
        finished.textContent = "Finished";

        newBook.appendChild(finished);

        const adjustStatusButton = document.getElementById(id);
            adjustStatusButton.addEventListener("click", (event) => {
            if(addBook.read_status == 'yes'){
                adjustStatusButton.style.border = '4px solid #dc2626';
                addBook.read_status = 'no'
            }else{
                adjustStatusButton.style.border = '4px solid #16a34a';
                addBook.read_status = 'yes'
            }
        });

        let title = document.createElement("p")
        title.textContent = addBook.bookTitle;

        newBook.appendChild(title);

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeBook");
        removeButton.id = "R" + id;
        removeButton.textContent = "Remove";

        newBook.appendChild(removeButton);

        const removeBook = document.getElementById("R" + id);
        removeBook.addEventListener("click", (event) => {
            console.log(event.target.id);
            let idToRemove = event.target.id;
            idToRemove = idToRemove.slice(1);
            const removeElements = document.getElementById(idToRemove);
            removeElements.remove();
        });
}

function removeBooks (){
    const remove = document.querySelectorAll(".removeBook");
    remove.forEach((book) => {
        book.addEventListener("click", (event) => {
            console.log(event.target.id);
           
        })
    })
}


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
    });
}

function displayLibary() {
    myLibrary.forEach(function(book){
        
    });
}
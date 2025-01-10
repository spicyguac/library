const shelf = document.querySelector(".shelf");
const form = document.getElementById("bookFrom");

const myLibrary = []

function Book() {
    
}

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
});



function addBookToLibrary() {
    
}

function displayLibary() {
    myLibrary.forEach(function(book){
        
    });
}
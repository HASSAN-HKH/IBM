
let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
 
}

function showbooks(){
    let sh = "";
    books.forEach((element , ind) => {
        sh += `<h1>book Number: ${ind + 1}</h1>
                <p><strong>Book Name:</strong> ${element.name}</p>
                <p><strong>Author Name:</strong> ${element.author}</p>
                <p><strong>Book Description:</strong> ${element.description}</p>
                <p><strong>No. of Pages:</strong> ${element.pagesNumber}</p>
                <button onclick="editbook(${ind})">Edit</button>`
    });
    document.getElementById('books').innerHTML = sh;

}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.author;
    document.getElementById('bookDescription').value = book.description;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); 
    showbooks(); 
}

function clearInputs(){
    document.getElementById('bookName').value = "";
    document.getElementById('authorName').value = "";
    document.getElementById('bookDescription').value = "";
    document.getElementById('pagesNumber').value = "";
}




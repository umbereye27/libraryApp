const {booksDatabase}=require("../databases/books");

const addBook = (book) => {
    let id = booksDatabase.length + 1;
    let newbook = {
        id,
        ...book
    }
    booksDatabase.push(newbook);
  console.log(booksDatabase);
}



const upDateBook = (id,key,value) => {
    booksDatabase.forEach(book => {
        if(book.id === id){
            book[key] = value;
        }
    })
console.log("Updateed book",booksDatabase);
}

const upDateManyElement = (id, values) => {

    let BookToUpdate = booksDatabase.find(element => element.id === id);
    if (upDateManyElement) {
        for (let key in values) {
            BookToUpdate[key] = values[key];         
        }
        console.log(BookToUpdate);
    }
    else{
        console.log("Book not found");
    }
    console.log("\n ATFER UPDATE MANY ELEMENT OF BOOK: \n",booksDatabase);
}


const removeBook = (id) => {
    let remainBook = booksDatabase.filter(book => book.id!== id);
    console.log('Removing book successfully');
    console.log(remainBook);
} 


const findBook = (id) => {
    console.log(`\n Searching book with id ${id} is:`);
    console.log(booksDatabase.find(book => book.id === id));  
}
const findManyBooks = (id) =>{
   
    let result = booksDatabase.filter(book => book.id === id);
    if(!result){
        console.log("there are no books to find");
    }
    else {
        console.log(" The Books  are found ");
    }
}

const dislayAllBooks = () => {
    console.log(booksDatabase); 
}

module.exports={
    addBook,
    upDateBook,
    upDateManyElement,
    removeBook,
    findBook,
    findManyBooks,
    dislayAllBooks
}
const {addBook,upDateBook,upDateManyElement,removeBook,findBook,findManyBooks,dislayAllBooks } = require("../src/controller/controller");

NewBook = {
    title: 'Love hard',
    author: 'F. Scott Fitzgerald',
    year: 1925 
};
addBook(NewBook);

upDateBook(2,"year",2000);


bookElem = {
    title: 'The Climate Change',
    author: 'Carine umbereye',
    year: 2010
}
upDateManyElement(1,bookElem);

removeBook(3);


findBook(1);

findManyBooks (1,2,4);

dislayAllBooks()
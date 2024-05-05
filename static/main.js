//1. Exploring JavaScript Objects


class Book {
    constructor(title, author, pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    displayBookInfo= () => {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
};

let twilight = new Book("Twilight", "Stephenie Meyer", 498);
twilight.displayBookInfo();

let bookArray = []
function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    bookArray.push(newBook);
    console.log(`${title} has been added to the library`)
};

addBook("Twilight", "Stephenie Meyer", 98);
addBook("New Moon", "Stephenie Meyer", 563);
addBook("Eclipse", "Stephenie Meyer", 629);

function searchTitle(title) {
    let findBook = bookArray.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    console.log(findBook);
}

function searchAuthor(author) {
    let findBook = bookArray.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    console.log(findBook);
}

searchTitle("Twilight")
searchAuthor("stephenie meyer")

function filterPages(bookArray) {
    let filterBooks = bookArray.filter(book => book.pages > 100);
    console.log(filterBooks)
}

filterPages(bookArray)

function addTitle(title) {
    bookArray.map(book => {book.title = "Title:" + book.title
        console.log(title)
    });
}
addTitle("new book")

function addAuthor(author) {
    bookArray.map(book => {book.title = "Title:" + book.title
        console.log(author)
    });
}
addTitle("new author")

//2. Exploring Objects and Math in JavaScript

class Account {
    constructor(accountNumber, balance, owner){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.owner=owner;
    }
};

Account.prototype.makeDeposit= function(amount) {
        this.balance += amount;
        console.log(`$${amount} deposited successfully`);
 };
    
Account.prototype.makeWithdrawal= function(amount) {
        this.balance -= amount;
        console.log(`$${amount} withdrawn successfully`);
}
    

let account1 = new Account(1, 5000, "Savvy");

account1.makeDeposit(500)
account1.makeWithdrawal(1000)
console.log(account1)

Account.prototype.compoundInterest = function(amount) {
    let interest = (this.balance * amount);
    let newBalance = (this.balance + interest);
    console.log(`After interest, your new balance is $${newBalance}`);
}

account1.compoundInterest(.03);
    

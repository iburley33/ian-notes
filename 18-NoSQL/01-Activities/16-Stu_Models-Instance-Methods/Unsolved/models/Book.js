const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    console.log(
        `${this.title} costs ${this.price / 2}`
    )
}

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const newBook = new Book({ title: 'Harry Potter', author: 'JK Rowling', price: 10 })

// TODO: Call the custom instance method on the instance
newBook.getDiscount();


module.exports = Book;

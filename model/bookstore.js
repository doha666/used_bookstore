const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: [true, 'please add a book ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'book id must be less than 10 char']
    },

    DOI: {
        type: Number,
        required: [true, 'please enter the books DOI']
        ,
    },

    authorID: {
        type: Number,
        required: [true, 'please enter the author of the book']
    },
    genre: {
        type: String,
        required: [true, 'please enter the genre of the book']
    },

    Publisher: {

        type: String,
        required: [true, 'please enter the publisher of the book']
    },

    dateOfPublication: {
        type: Date,
        required: [true, 'please enter the date of publication of the book']

    },

    rating: {
        type: String,
        required: [true, '']

    },

    state: {
        type: String,
        required: [true, 'please enter the address']
    },

    description: {
        type: String,
        required: [true, 'please enter the address']

    }


});



const authorSchema = new mongoose.Schema({
    authorID: {
        type: Number,
        required: [true, 'please add a author ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'author id must be less than 10 char']
    },

    name: {
        type: Number,
        required: [true, 'please enter the authors name']
        ,
    },


    publisher: {

        type: String,
        required: [true, 'please enter the publisher of the book']
    },


});


const CustomerSchema = new mongoose.Schema({
    customerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter the username']
    },

    password: {
        type: String,
        required: [true, 'Please enter users password']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'please enter the users phone number']
    },

    address: {
        type: String,
        required: [true, 'please enter the address of the user']

    },


});

const sellerSchema = new mongoose.Schema({
    sellerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter the username']
    },

    password: {
        type: String,
        required: [true, 'Please enter users password']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'please enter the users phone number']
    },

    address: {
        type: String,
        required: [true, 'please enter the address of the user']

    },


});

const commentSchema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: [true, 'please add a book ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'book id must be less than 10 char']
    },



    customerID: {
        type: Number,
        required: [true, 'please enter the user ID']
    },


    comment: {

        type: String,
        required: [true, 'please enter users comment']
    },



});




const seller_listing_Schema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: [true, 'please add the book ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'book id must be less than 10 char']
    },



    price: {
        type: Number,
        required: [true, 'please enter the price of the book']
    },


    amount: {
        type: Number,
        required: [true, 'please enter the amount of books']
    },




    sellerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },


    ListingID: {
        type: Number,
        required: [true, 'please add a listing ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'listing id must be less than 10 char']
    },


});



const customer_order_Schema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: [true, 'please add a book ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'book id must be less than 10 char']
    },



    price: {
        type: Number,
        required: [true, 'please enter the price']
    },


    amount: {
        type: Number,
        required: [true, 'please enter the amount of books']
    },




    customerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },


    productID: {
        type: Number,
        required: [true, 'please add a product ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'product id must be less than 10 char']
    },


});




const book_request_Schema = new mongoose.Schema({
    DOI: {
        type: Number,
        required: [true, 'please enter the books DOI']
        ,
    },




    genre: {
        type: String,
        required: [true, 'please enter the genre of the book']
    },




    customerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },



    authorName: {
        type: Number,
        required: [true, 'please enter the authors name']
        ,
    }

});





const cartSchema = new mongoose.Schema({
    cartID: {
        type: Number,
        required: [true, 'please add a cart ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'cart id must be less than 10 char']
    },

    customerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },


    address: {
        type: String,
        required: [true, 'please enter the address']

    },

    price: {
        type: Number,
        required: [true, 'please enter the price of the book']
    },

});




const order_cart_Schema = new mongoose.Schema({
    cartID: {
        type: Number,
        required: [true, 'please add a cart ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'cart id must be less than 10 char']
    },

    productID: {
        type: Number,
        required: [true, 'please add a product ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'product id must be less than 10 char']
    },
});



const order_Schema = new mongoose.Schema({
    cartID: {
        type: Number,
        required: [true, 'please add a cart ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'cart id must be less than 10 char']
    },

    customerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    },

    address: {
        type: String,
        required: [true, 'please enter the address']

    },
    price: {
        type: Number,
        required: [true, 'please enter the price of the book']
    },


});


const wish_list_Schema = new mongoose.Schema({
    cartID: {
        type: Number,
        required: [true, 'please add a cart ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'cart id must be less than 10 char']
    },

    customerID: {
        type: Number,
        required: [true, 'please add a user ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'user id must be less than 10 char']
    }
});
let book = mongoose.model('book', bookSchema);

let author = mongoose.model('author', authorSchema);
let customer = mongoose.model('customer', CustomerSchema);
let seller = mongoose.model('seller', sellerSchema);
let comment = mongoose.model('comment', commentSchema);
let seller_Listing = mongoose.model('seller_Listing', seller_listing_Schema);
let customer_Order = mongoose.model('Customer_Order', customer_order_Schema);
let book_Request = mongoose.model('book_Request',book_request_Schema);
let cart = mongoose.model('cart', cartSchema);
let order_Cart = mongoose.model('order_Cart',order_cart_Schema);
let wishlist = mongoose.model('wishlist', wish_list_Schema);

module.exports = {book, author, customer, seller,comment, seller_Listing, customer_Order, book_Request, cart, order_Cart, wishlist};

 
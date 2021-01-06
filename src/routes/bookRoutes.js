const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img:"taj.png"
    
        },
    
        {
            title: 'Harry Potter',
            author: 'J k Rowling',
            genre: 'Fantasy',
            img:"HP.jpg"
    
        },
    
        {
            title: 'Sherlock Holmes',
            author: 'A C Doyle',
            genre: 'Mystery',
            img:"SH.jpg"
    
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    });

    booksRouter.post('/', function(req,res){
        var book = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        books.push(book);
        res.render("books", 
        {
            nav,
            title: 'Library',
            books
        });
    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",
        {
            nav,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;
}


module.exports = router;
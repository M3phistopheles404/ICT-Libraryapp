const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img:"JB.jpg"
    
        },
    
        {
            title: 'Harry Potter',
            author: 'J k Rowling',
            genre: 'Fantasy',
            img:"jkr.jpg"
    
        },
    
        {
            title: 'Sherlock Holmes',
            author: 'A C Doyle',
            genre: 'Mystery',
            img:"acd.jpg"
    
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("author",
        {
            nav,
            title:'Library',
            author: authors[id]
        });
    });

    return authorsRouter;
}


module.exports = router;
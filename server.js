const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
//here is the base for our blog -
//what we have is that our const articles, will contain all of the articles to which we
//will iterate through
app.get('/',(req, res) => {

    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article3',
        createdAt: new Date(),
        description: 'Test description'
    }

]
    res.render('articles/index', { articles: articles});
})
app.listen(5000)

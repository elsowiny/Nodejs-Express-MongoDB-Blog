const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
app.set('view engine', 'ejs')
//this allows us to acess our form options
app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))

//here is the base for our blog -
//what we have is that our const articles, will contain all of the articles to which we
//will iterate through
app.get('/', async (req, res) => {

   const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', { articles: articles});
})

app.use('/articles', articleRouter)

app.listen(5000)

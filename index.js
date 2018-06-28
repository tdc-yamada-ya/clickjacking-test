const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
  res.render('index.ejs')
})

app.get('/xFrameOptions1', (req, res, next) => {
  res.header('X-Frame-Options', 'DENY')
  res.render('index.ejs')
})

app.get('/xFrameOptions2', (req, res, next) => {
  res.header('X-Frame-Options', 'SAMEORIGIN')
  res.render('index.ejs')
})

app.get('/xFrameOptions3', (req, res, next) => {
  res.header('X-Frame-Options', 'ALLOW-FROM https://github.com/')
  res.render('index.ejs')
})

app.listen(3000)

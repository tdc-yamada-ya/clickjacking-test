const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
  res.render('index.ejs')
})

app.get('/xFrameOptionsNone', (req, res, next) => {
  res.render('content.ejs')
})

app.get('/xFrameOptions1', (req, res, next) => {
  res.header('X-Frame-Options', 'DENY')
  res.render('content.ejs')
})

app.get('/xFrameOptions2', (req, res, next) => {
  res.header('X-Frame-Options', 'SAMEORIGIN')
  res.render('content.ejs')
})

app.get('/xFrameOptions3', (req, res, next) => {
  res.header('X-Frame-Options', 'ALLOW-FROM https://clickjacking-test.com/')
  res.render('content.ejs')
})

app.listen(3000)

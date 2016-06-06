var express = require('express')
var app = express()
var http = require('http')

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get("/", function(req, res, next) { res.redirect('broken') })
app.get("/broken", function(req, res, next) { res.render('broken') })
app.get("/solution1", function(req, res, next) { res.render('solution1') })
app.get("/solution2", function(req, res, next) { res.render('solution2') })
app.get("/solution3", function(req, res, next) { res.render('solution3') })
app.get("/solution4", function(req, res, next) { res.render('solution4') })
app.get("/inner", function(req, res, next) { res.render('inner') })

var port = 3000

http.createServer(app).listen(port, function(){
    console.log('web server is listening on port %d', port)
})

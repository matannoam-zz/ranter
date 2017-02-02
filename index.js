var app = require('express')()
var http = require('http').Server(app)

app.get('/', function(request, response) {
    response.send(
        '<h1>Ranter</h1><h2>A place to rant</h2>'
    )
})

http.listen(3000, function(){
    console.log('server listening on *:3000')
})

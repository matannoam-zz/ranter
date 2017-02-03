var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
    socket.on('chat message', function(message){
        io.emit('chat message', message)
    })
})


http.listen(app.get('port'), function(){
    console.log('server listening on port', app.get('port'))
})

const io = require("socket.io")();

io.on("connection", function(){
    console.log("a User connected!")
})

io.listen(3001);

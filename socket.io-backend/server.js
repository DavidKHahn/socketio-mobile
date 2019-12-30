const io = require("socket.io")();

io.on("connection", socket => {
    console.log("User connected!");
    socket.on("message", message => {
        console.log(message);
    })
})

io.listen(3001);
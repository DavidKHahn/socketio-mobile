const io = require("socket.io")();

// const testMessage = {
//     _id: 3,
//     text: 'Hello developer',
//     createdAt: new Date(),
//     user: {
//       _id: 2,
//       name: 'React Native',
//       avatar: 'https://placeimg.com/140/140/any'
//     }
//   };

io.on("connection", socket => {
    console.log("User connected!");
    // listen for msg event
    socket.on("message", message => {
        console.log(message);
        io.emit("message", message);
    })
})

io.listen(3001);
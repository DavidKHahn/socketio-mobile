const io = require("socket.io")();
const messageHandler = require("./handlers/message.handler");

let currentUserId = 2;
const userIds = {};

function createUserAvatarUrl(){
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;

}

io.on("connection", socket => {
    console.log("User connected!");
    console.log(socket.id);
    users[socket.id] = {userId: currentUserId++}
    socket.on("join", username => {
        users[socket.id].username = username
      // creates unique user avatar
      users[socket.id].avatar = createUserAvatarUrl();
    })
    // listen for msg event
    messageHandler.handleMessage(socket, users)
})

io.listen(3001);
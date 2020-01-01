const io = require("socket.io")();
const messageHandler = require("./handlers/message.handler");
const uuidv1 = require("uuid/v1");

const users = {};

function createUserAvatarUrl(){
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUsersOnline() {
    const values = Object.values(users);
    const onlyWithUsernames = values.filter(u => u.username !== undefined);
    return onlyWithUsernames;
}

io.on("connection", socket => {
    console.log("User connected!");
    console.log(socket.id);
    users[socket.id] = {userId: uuidv1()}
    socket.on("disconnect", () => {
        delete users[socket.id];
        io.emit("action", { type: "users_online", data: createUsersOnline() })
    })
    socket.on("action", action => {
        switch(action.type) {
            case "server/join":
                console.log("Got join event", action.data);
                users[socket.id].username = action.data;
                users[socket.id].avatar = createUserAvatarUrl();
                // io emits to all users while socket to only same user
                io.emit("action", {type: "users_online", data: createUsersOnline()});
                // checks which userId exists
                socket.emit("action", { type: "self_user", data: users[socket.id] });
                break;
            case "server/private-message":
                console.log("Got a private-message", action.data);
                break;
        }
    })
})

io.listen(3001);
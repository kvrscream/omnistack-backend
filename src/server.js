const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const server = require("http").Server(app);
const io = require('socket.io')(server);
const cors = require("cors");

io.on("connection", socket => {
    socket.on("connectRoom", box => {
        socket.join(box);
    })
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

mongoose.connect(
    "mongodb://ds155243.mlab.com:55243/goweekbotelhando",
    {
        auth:{
            user: "root",
            password: "?01Motorhead"  
        },
        useNewUrlParser:true
    }
)

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(routes);
server.listen(3001);
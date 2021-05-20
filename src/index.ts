import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { } from './types';

const httpServer = createServer();
const io = new Server(httpServer, {
    wsEngine: require('eiows').Server,
    cors: {
        origin: ["*"],
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket: Socket) => {
    socket.on("PONG", () => socket.emit("PING", {}))
});

httpServer.listen(18300);

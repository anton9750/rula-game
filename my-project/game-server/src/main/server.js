// game-server/src/main/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('🎮 Player connected:', socket.id);
  socket.on('playerMove', (data) => socket.broadcast.emit('playerMoved', { id: socket.id, ...data }));
  socket.on('disconnect', () => console.log('Player disconnected:', socket.id));
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

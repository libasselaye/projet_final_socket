'use strict'
/**
 * Import Quizz class.
 */

const ImportQuizz = require('../engine/Quizz');

const quizz = new ImportQuizz('quizz');


/**
 * Socket.io server. 
 */

const socketio = require('socket.io');

function io(server) {
  
  const io = socketio(server);

  io.on('connection', function(socket) {

    socket.on('register', () => quizz.register(socket.id));
    
    socket.on('reponse', () => quizz.reponse(socket.id));
    
    socket.on('disconnect', () => quizz.remove_player(socket.id));
    
  });
 
  setInterval(() => {
    const data = {
      message: 'Server update !',
      players: Object.values(quizz.players)
    };
    io.volatile.emit('update', data);
  }, 1000 / 25); // ~25 FPS

}

module.exports = io;

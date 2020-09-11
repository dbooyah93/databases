var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.end('test');
  }, // a function which handles a get request for all messages
  // classes/users
  // classes/messages
  post: function (req, res) {
    var { uri, body } = req;
    var username = body.username;
    var roomname = body.roomname;
    var message = body.message;
    // assume we are in

    if ( uri === 'classes/messages' ) {
      console.log(username);
    }
    console.log(typeof username);
    // res.write(username);
    res.end();
  } // a function which handles posting a message to the database
};

// IncomingMessage.body.username/message/roomname



/**
 * i just got a message saying my internet is unstable
 * I have google fiber with like 300 upload speed since i'm using an internet extender
 * it is storming out atm though
 * maybe it's zoom
 *
 */
var models = require('../models');

module.exports = {
  get: function (req, res) {
  },
  post: function (req, res) {
    const { uri, body } = req;

    let username = body.username;
    let roomname = body.roomname;
    let message = body.message;

    if ( uri === 'classes/users' ) {

      console.log(addition);
    }
    res.end();
  }
};
/**
    var username = body.username;
    var roomname = body.roomname;
    var message = body.message;

 */
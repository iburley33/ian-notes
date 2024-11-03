const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/the_magic_eat_ball_db');

module.exports = mongoose.connection;

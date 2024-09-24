const Mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/kartavya';

Mongoose.connect(DB_URI);

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db;
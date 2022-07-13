const { port, env } = require('./config/vars');
const app = require('./config/express');
// const mongoose = require('./config/mongoose');

// open mongoose connection
// mongoose.connect();

// listen to requests
app.listen(port, () => {
  console.log(`server started on port ${port} (${env})`);
});

module.exports = app;

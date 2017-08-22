// require the rethinkdbdash Module
var r = require('rethinkdbdash')();

//save the data into a table called as 'agents'
r.table('agents').run().then(function(result) {
  console.log("result", result);
});
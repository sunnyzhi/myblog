
/* GET home page. */
var welcome = require('./controllers/welcome.js');
module.exports = function(app){
	app.get('/', welcome.index);
}
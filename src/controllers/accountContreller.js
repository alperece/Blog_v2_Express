/* const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alper',
    password: '654321',
    database: 'fbw10'
}); */

const connection = require('../config/config');

const aController = {};

// ! LOGIN - get: ================================================================================
aController.signinGet = (req, res) => {
    connection.query('SELECT * FROM accounts', null, function (error, results, fields) {
         res.render("signin"); 
    });
};

// ! LOGIN - post: ================================================================================
aController.signinPost = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    
	if (username && password) {

		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {

			if (results.length > 0) {
                req.username = username;
                req.password = password; 
                res.redirect('/admin');
             
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
    } 
};

// ! REGISTER - get: ================================================================================
aController.signupGet = (req, res) => {
    connection.query('SELECT * FROM accounts', null, function (error, results, fields) {
        res.render("signup"); 
   });
};

// ! REGISTER: ==================================================================
aController.signinPost = (req, res) => {
    const data = req.body;
    console.log(req.body);

    connection.query('INSERT INTO accounts set ?', data, (err, account) => {
            res.redirect('/admin/signin');
        })
    };


// ! EXPORT: ======================================================
module.exports = aController;

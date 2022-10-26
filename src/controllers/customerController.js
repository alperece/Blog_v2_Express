/* const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alper',
    password: '654321',
    database: 'fbw10'
}); */

const connection = require('../config/config');

const controller = {};


// ! List - get: ================================================================================
controller.list = (req, res) => {
    connection.query('SELECT * FROM customer', (err, customers) => {
        if (err) {
        console.log(err);
        }
        res.render('customers', {
            data: customers
        });
    });
};


// ! Save - get: ================================================================================
controller.save = (req, res) => {

    const data = req.body;
    console.log(req.body);
   connection.query('INSERT INTO customer set ?', data, (err, customer) => {
            console.log(customer);
            res.redirect('/');
        })
};


// ! Edit - get: ================================================================================
controller.edit = (req, res) => {
    console.log( req.params);
    const {id} = req.params;

    connection.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {

            res.render('customers_edit', {
                data: rows[0]
            })
               
        });
};

// ! Update - get: ================================================================================
controller.update = (req, res) => {
    const {id} = req.params;
    const newCustomer = req.body;
   
    connection.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
};

// ! Delete - get: ================================================================================
controller.delete = (req, res) => {
    const {id} = req.params;

        connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
};

// ! LOGIN - get: ================================================================================
controller.signinGet = (req, res) => {
    connection.query('SELECT * FROM accounts', null, function (error, results, fields) {
         res.render("signin"); 
    });
};

// ! LOGIN - post: ================================================================================
controller.signinPost = (req, res) => {
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
controller.signupGet = (req, res) => {
    connection.query('SELECT * FROM accounts', null, function (error, results, fields) {
        res.render("signup"); 
   });
};

// ! REGISTER: ==================================================================
controller.signinPost = (req, res) => {
    const data = req.body;
    console.log(req.body);

    connection.query('INSERT INTO accounts set ?', data, (err, account) => {
            res.redirect('/admin/signin');
        })
    };


// ! EXPORT: ======================================================
module.exports = controller;

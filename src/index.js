const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');
const myaccountRoutes = require('./routes/aRouter');

app.set('port', process.env.PORT || 3115);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);
app.use('/admin/', myaccountRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const oneHr = 1000 * 60 * 1;
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: oneHr },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };


// function writeCookie (key, value, days) {
  // var date = new Date();

  // Default at 365 days.
  // days = days || 365;

  // Get unix milliseconds at current time plus number of days
//   date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

//   window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

//   return value;
// };

app.use(session(sess));

//START THAT MF HANDLEBARS ENGINE
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Connected'))
})
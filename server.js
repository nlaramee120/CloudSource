const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sessions = require('express-session');
// NEW TECh
const cookieParser = require('cookie-parser');

const sequelize = require('./config/connection');
// const helper = require('./utils')
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "secretsbaybeeeee",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}));

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

// app.use(session(sess));

//START THAT MF HANDLEBARS ENGINE
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//SERVER PUBLIC FILES
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Connected'))
})
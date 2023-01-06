const newsRoute = require('./news');

function route(app) {
  app.use('/news', newsRoute);
  app.get('/', function (req, res) {
    res.render('home');
  });
}

module.exports = route;

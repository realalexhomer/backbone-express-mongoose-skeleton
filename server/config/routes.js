module.exports = function(app, express){

  var router        =   express.Router(),
      userRoutes    =   require('../routes/users')(router),
      calorieRoutes =   require('../routes/calories')(router);

  router.use(function(req, res, next) {
    next();
  });

  router.get('/', function(req, res) {
    res.json({ message: 'api is working' }); 
  });

  app.use('/api', router);

};
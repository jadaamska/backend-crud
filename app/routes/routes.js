const routes = [
    require('./anime')
];

module.exports = function(app){
    routes.forEach(function(route){
       route(app);
    });
};
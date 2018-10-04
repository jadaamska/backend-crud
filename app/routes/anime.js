const Anime = require('./../models/anime');

module.exports = function(app) {
    app.get('/anime', function(req, res) {
        Anime.find({},function(err,posts){
            if(err) throw err;
            res.send(posts);
        });
    });

    app.post('/anime', function(req, res) {
        Anime(req.body)
            .save(function (err, data) {
                if (err) throw err;
                res.json(data);
            });
    });

    app.delete('/anime/:id', function(req) {
        Anime.findByIdAndRemove(req.params.id, (err) => {
            if(err) throw err;
        })
    });
    app.post('/updateAnime', function(req) {
        Anime.findByIdAndUpdate(req.body._id, req.body, {new: true},
        (err) => {
            if(err) throw err;
        })
    });
};

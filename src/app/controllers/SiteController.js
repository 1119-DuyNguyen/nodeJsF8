const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                //vì handlebars kh cho tác động object có function- prototype nên phải chuyển về object thường

                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => next(err));
        // res.render('home');
    }
    //[GET] /search

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

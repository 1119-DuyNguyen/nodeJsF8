const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const coursesRouter = require('./courses');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
    // app.post("/search",(req,res)=>{

    //   console.log(req.body)
    // res.send()
    // })
    //get = route tuyến đường
}
module.exports = route;

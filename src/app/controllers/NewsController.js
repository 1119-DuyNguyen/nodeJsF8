class NewsController
{
    //[GET] /news
        index(req,res){
            res.render('news');  
        }
    //[GET] show
    show(req,res)
    {
        res.send('new details')
    }
}

module.exports= new NewsController;
const express = require('express')
const morgan=require('morgan')
const handlebars=require('express-handlebars')
const path = require('path')
//giống import thư viện và lưu vào biến express
const app = express()
//port muốn website ở cổng nào
const port = 3000

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'./resources/views'));
//http logs
app.use(morgan('combined'))
//thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})
//get = route tuyến đường
//port localhost : 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

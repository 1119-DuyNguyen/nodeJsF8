const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
//import mongoose
const db = require('./config/db'); // /index.js là mặc định
db.connect();
//giống import thư viện và lưu vào biến express
const app = express();
//port muốn website ở cổng nào
const port = 3000;
const route = require('./routes/index.js');
//template handlebars
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            bar() {
                return 'BAR!';
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//http logs
//app.use(morgan('combined'))
//thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//để body / res có dữ liệu thì 2 dòng dưới
app.use(express.urlencoded({ extended: true })); // dùng cho submit html
app.use(express.json()); //submit js -xml http request, fetch,axios,...

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'));
//routes init
route(app);

//port localhost : 127.0.0.1
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

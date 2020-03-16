const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.use(require('./controllers/index.js'));
app.use(require('./controllers/mugs.js'));

app.listen(3000, () => {
    console.log('Listening on 3000');
});
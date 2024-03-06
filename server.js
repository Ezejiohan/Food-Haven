const express = require('express');
const { route } = require('./route/userRoute');


const PORT = 5000;
const app = express();
require('./database/database');


app.use(express.json());
app.use('/', route);

app.listen(PORT, () => {
    console.log('app listening on PORT ' + PORT);

});
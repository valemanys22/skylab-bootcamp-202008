const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('index');
const morgan = require('morgan');
const { routes } = require('./routes');

const app = express();
const PORT = process.env.PORT || 4040;
const VIEW_FOLDER = 'src/views';

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views')
app.set('view engine', 'ejs');

for (x of routes) {
    generateRoutes(x);
}

function generateRoutes({ pathF, file }) {
    app.get(pathF, (request, response) => {
        response.render(file);
    });
}



app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));


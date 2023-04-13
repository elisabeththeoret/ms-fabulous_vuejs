const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;
const corsOptions = {
    origin: 'http://localhost:8091',
    credentials: true
};

// models 
const db = require('./app/models');
// Sequelize 
db.connex.sync();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// TEST 
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome'
    });
});

// route 
require('./app/routes/pastry.route') (app);

/**
 * start server listening on port 
 */
app.listen(PORT, () => {
    console.log(`Server Running... ${ PORT }`);
});

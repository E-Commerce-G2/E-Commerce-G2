require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = require('express')();
app.use(cors());
// Port
const PORT = process.env.PORT || 3000;

// use body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database sync
require('./model/DBsync');

// include routes
require('./routes/users')(app);
require('./routes/posts')(app);
require('./routes/categories')(app);


// run server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
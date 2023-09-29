const db = require('./config/database.js')
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config();

const PORT = process.env.PORT || 3000;

db.hasConnection();
app.listen(3000, () =>console.log(`Port is contacted at: ${PORT}`));
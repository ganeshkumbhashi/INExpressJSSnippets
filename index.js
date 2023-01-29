const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();

// init middleware
app.use(logger);

app.use(express.json());

app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middelware/errorMiddelware');
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Override the express error handler by one of our one
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on ${port}`));

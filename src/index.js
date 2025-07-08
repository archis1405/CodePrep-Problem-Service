const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server_config');
const apiRouter = require('./routes');

const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');



const app =  express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and the route starts with /api , we map it to apiRouter
app.use('/api',apiRouter);
console.log(apiRouter);

app.get('/ping' , (req ,res) => {
    return res.json({message : 'Problem Service is alive'});
});

// last middleware if any errors occurs 
app.use(errorHandler);

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    
    await connectToDB();
    console.log("Sucessfully Connected to DB");
 
});


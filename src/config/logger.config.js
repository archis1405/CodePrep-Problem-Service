const winston = require('winston');
const { LOG_DB_URL } = require('./server_config');
require('winston-mongodb');

const allowedTransports = [];

//Transport for Logging on the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
        
    )
}));

//Transport for logging in the MongoDB database
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db: LOG_DB_URL,
    collection: 'logs', 
}))

//Transport for logging the files
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({stack:true}),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}: ${log.stack}`)
    ),
    transports: allowedTransports
});

module.exports = logger;

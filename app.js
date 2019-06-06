var express    = require('express');
var createError= require('http-errors');
var app        = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var log4js = require('log4js');

log4js.configure({
  appenders: {
      console: {
        type: 'console'
      },
      logfile: {
        type: 'dateFile',
        filename: './logs/express.log',
        pattern: '.yyyy-MM-dd',
        keepFileExt: true,
        maxLogSize: 10485760
      },
      errorlog: {
        type: 'dateFile',
        filename: './logs/express_error.log',
        pattern: '.yyyy-MM-dd',
        keepFileExt: true,
        maxLogSize: 10485760,
        level :'error'
      },
      justErrors: {
        type: 'logLevelFilter',
        appender: 'errorlog',
        level: 'error'
      }
  },
  categories: {
      default: {appenders:['console','logfile','justErrors'], level: 'debug'},
  }
});

var logger = log4js.getLogger();

// app.use(log4js.connectLogger(logger));
app.use(function(req, res, next){
  logger.info([
    req.headers['x-forwarded-for'] || req.client.remoteAddress,
    // req.client.remoteAddress,
    // req.connection.remoteAddress,
    // req.ip,
    // req.ips,
    // req.connection.socket.remoteAddress,
    // req.socket.remoteAddress,
    new Date().toLocaleString(),
    req.method,
    req.url,
    res.statusCode,
    req.headers.referer || '-',
    req.headers['user-agent'] || '-'
    ].join('\t')
    );
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

var router = require('./routes/v1/');
app.use('/api/v1/', router);

app.get("/", function (req, res) {
  //res.json({mssage:"This is test"});
  throw new Error("BROKEN TEST"); // Express will catch this on its own.
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (err.status === 404) {
    logger.error(err.message);
  } else {
    logger.error(err);
  }
  res.status(err.status || 500);
  res.json({
    err: {
      message: err.message,
    },
  });
});

module.exports = app;

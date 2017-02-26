import http from 'http';
import express from 'express';


let  app = express();
app.server = http.createServer(app);


let port = process.env.EXPRESS_PORT || 3000;
let  env = process.env.NODE_ENV || 'none';


app.use(express.static(__dirname + '/../public'));

app.use('/num',function(req, res,next) {
    res.send('Hello');
    next();
});

app.server.listen(port);
console.log("Server started, listening on port: " + port+", env: " + env);

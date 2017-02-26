'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

let port = process.env.EXPRESS_PORT || 3000;
let env = process.env.NODE_ENV || 'none';

app.use(_express2.default.static(__dirname + '/../public'));

app.use('/num', function (req, res, next) {
    res.send('Hello');
    next();
});

app.server.listen(port);
console.log("Server started, listening on port: " + port + ", env: " + env);
//# sourceMappingURL=index.js.map
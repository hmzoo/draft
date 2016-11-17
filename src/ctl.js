var util = require("util");
var EventEmitter = require("events").EventEmitter;
var Mdb = require('./mdb.js');

var Ctl = function() {
    var self = this;
    EventEmitter.call(this);
    var db = new Mdb();
    db.on('updated', function(tab) {
        self.emit('dbupdated', tab);
    });


  };

util.inherits(Ctl, EventEmitter);
module.exports = Ctl;

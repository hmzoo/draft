var util = require("util");
var EventEmitter = require("events").EventEmitter;

var Mdb = function() {
    var self = this;
    EventEmitter.call(this);
    var tab = [];
    var tabIndex = {};
    var onUpdated = function() {
        self.emit("updated", tab);
    }

    this.exists = function(id) {
        return (id in tabIndex) ?
            true :
            false;
    }

    this.getTab = function() {
        return tab;
    }



    this.add = function(id, obj) {

        if (!self.exists(id)) {
            obj.id = id;
            tab.push(obj);
            tabIndex[id] = tab.length - 1;
            onUpdated();
        } else {
            self.set(id, obj)
        }
    }

    this.del = function(id) {
        if (self.exists(id)) {
            tab.splice(tabIndex[id], 1);
            delete tabIndex[id],
                onUpdated();
        }
    }

    this.get = function(id) {
        return tabIndex[id] != undefined ?
            tab[tabIndex[id]] :
            null;
    }

    this.set = function(id, obj) {
        if (self.exists(id)) {
            for (var key in obj) {
                tab[tabIndex[id]][key] = obj[key];
            }

            onUpdated();
        }

    }

}
util.inherits(Mdb, EventEmitter);

module.exports = Mdb;

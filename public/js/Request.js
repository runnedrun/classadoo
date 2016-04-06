var $ = require("jquery");

Request = function(prefix, dataType, noCache) {
    var self = this;            

    self.get = function(path) {                        
        return $.ajax({
            url: prefix + path,
            timeout: 1000,            
            dataType: dataType || "json",
            cache: !noCache,
            method: "GET"            
        })        
    }

    self.post = function(path) {                
        return $.ajax({
            url: prefix + path,
            timeout: 1000,
            dataType: dataType || "json",
            method: "POST",
            data: data            
        })
    }
}

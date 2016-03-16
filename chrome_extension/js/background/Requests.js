console.log("ajax_fns loaded");

Request = function(domain, dataType, noCache) {
    var self = this;            

    self.get = function(path) {                
        return $.ajax({
            url: domain + path,
            timeout: 1000,
            dataType: dataType || "json",
            cache: !noCache,
            method: "GET"            
        })        
    }

    self.post = function(path) {                
        return $.ajax({
            url: domain + path,
            timeout: 1000,
            dataType: dataType || "json",
            method: "POST",
            data: data            
        })
    }
}

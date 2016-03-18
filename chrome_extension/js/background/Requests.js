console.log("ajax_fns loaded");

Request = function(prefix, dataType) {
    var self = this;            

    self.get = function(path) {                
        return $.ajax({
            url: prefix + path,
            timeout: 1000,
            dataType: dataType || "json",            
            method: "GET"            
        })        
    }

    self.post = function(path) {                
        return $.ajax({
            url: prefix + path,
            timeout: 1000,
            dataType: dataType || "json",            
            data: data            
        })
    }
}

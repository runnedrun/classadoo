Storage = function(key) {
    var self = this;

    self.set = function(value) {
        var deferred = $.Deferred();  

        var dataObj = {}
        dataObj[key] = value        

        chrome.storage.local.set(dataObj, function() { deferred.resolve(value) });
        return deferred.promise();                       
    }

    self.get = function() {
        var deferred = $.Deferred();                 
        chrome.storage.local.get(key, function(res) { deferred.resolve(res[key] || {}) });
        return deferred.promise();                   
    }    
}

TabStorage = function(key) {    
    var self = this;
    var storage = new Storage(key);

    self.set = function(tabId, value) {
        return storage.get().then(function(res) {                        
            res[tabId] = value;     
            return storage.set(res).then(function() { return value });
        })        
    }


    self.get = function(tabId) {                
        return storage.get().then(function(res) {            
            return res[tabId] || {}
        })
    }

    self.clearAllTabs = function(tabId) {
        return storage.set({});
    }

    self.getAllTabs = storage.get
}
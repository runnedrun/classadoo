LocalStorageAccess = {
    setTaskId: function(args, callback) {
        chrome.storage.local.set({"taskId": args.id}, callback);
    },

    clearTaskId: function(args, callback) {
        chrome.storage.local.clear("taskId", callback);
    },
}

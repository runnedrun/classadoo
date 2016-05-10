var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, 'classadoo-test.firebaseio.com', {
    states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
    }
});
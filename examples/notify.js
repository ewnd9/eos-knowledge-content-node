// forked from https://github.com/Place1/node-gir/blob/e3ce1dfe9579ce530d765122d5b5aada8391c68e/examples/notify.js

'use strict';

const { startGLibMainloop, importNS } = require('../');

startGLibMainloop();

const notify = importNS('Notify', null);
notify.init('notify_test.js sample application');

const notification = new notify.Notification({ summary: 'a' });
notification.update(
    'Notify Test',
    'This is a test notification message via Node.JS.',
    null
);
notification.show();

setTimeout(() => {
    process.exit(0);
}, 500);

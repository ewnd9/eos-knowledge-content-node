// forked from https://github.com/Place1/node-gir/blob/e3ce1dfe9579ce530d765122d5b5aada8391c68e/examples/gtk.js

'use strict';

const { startGLibMainloop, importNS } = require('../');
startGLibMainloop();

const Gtk = importNS('Gtk', '3.0');
Gtk.init(null);

const win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL,
    title: 'Node.JS Gtk Window'
});

win.set_border_width(10);

const button = new Gtk.Button();
button.set_label('hallo, welt!');
win.add(button);

// TypeError: win.connect is not a function
win.connect('destroy', () => {
  Gtk.main_quit();
});

let clickedCount = 0;
button.connect('clicked', () => {
    button.set_label(`clicked: ${clickedCount++} times`);
});

win.show_all();

setTimeout(() => {
    process.exit(0);
}, 500);

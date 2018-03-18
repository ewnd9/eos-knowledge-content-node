// forked from https://github.com/Place1/node-gir/blob/e3ce1dfe9579ce530d765122d5b5aada8391c68e/examples/keybinder.js

'use strict';

const { startGLibMainloop, importNS } = require('../');
startGLibMainloop();

const Keybinder = importNS('Keybinder', '3.0');
Keybinder.init();

const hotkey = '<Super>X';
// ERROR:../src/value.cc:134:void V8ToGIArgument(v8::Isolate*, GIBaseInfo*, GIArgument*, v8::Local<v8::Value>): code should not be reached
const result = Keybinder.bind(hotkey, () => console.log('clicked'), null, null);
console.log(hotkey, result);

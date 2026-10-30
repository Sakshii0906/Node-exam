const path = require('path');
const fs = require('fs');
const targetDirectory = path.join(process.cwd(),'LabWorkspace');
fs.mkdir(targetDirectory, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully:', targetDirectory);
    }
});

// Importing events
const EventEmitter = require('events');
 
// Initializing event emitter instances 
let eventEmitter = new EventEmitter();


eventEmitter.on('LabEventManager', (msg) => {
   console.log(`lab event manager triggered with a message: ${msg}`);
});

// Triggering myEvent
eventEmitter.emit('LabEventManager', "First event");



eventEmitter.on('LogAnalyzed', (msg) => {
   console.log(`log analyzed has been read its entry count calculated: ${msg}`);
});

// Triggering myEvent
eventEmitter.emit(`reportGenerated`, "report generated sucessfully");

eventEmitter.on('reportGenerated', (msg) => {
   console.log(`report generated successfully: ${msg}`);
});

// Triggering myEvent
eventEmitter.emit('reportGenerated', "report generated sucessfully");







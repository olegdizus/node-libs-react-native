if(typeof global.self === "undefined")
{
    global.self = global;
}
global.Buffer = require('buffer').Buffer;
global.process = require('process');
global.http = require('http')

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
};

// Some modules expect userAgent to be a string
global.navigator.userAgent = 'React Native';

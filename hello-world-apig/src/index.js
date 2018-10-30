'use strict';
console.log('Loading function');

// exports.handler = (event, context, callback) => {
//     callback(null, 'Hello :) ' + event.name);
// };

exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "my custom header value" },
        body: "hello world"
    });
}


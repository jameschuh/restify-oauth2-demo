var http = require('http');  
  
var qs = require('querystring');  
  
var post_data = {  
    a: 123,  
    time: new Date().getTime()};//这是需要提交的数据  
  
  
var content = qs.stringify(post_data);  
  
var options = {
    hostname: '127.0.0.1',  
    port: 5000,  
    path: '/m/kevin',  
    method: 'GET',  
    headers: {
        'accept-version':'1.0.2'
    }
};
  
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
        console.log('BODY: ' + chunk);  
    });  
});  
  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
// write data to request body  
req.write(content);  
  
req.end();  
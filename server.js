const http = require('http');
const fs = require('fs');

let rCount = 0;

const server = http.createServer((req, res, err) => {
    req.url!=='/favicon.ico' && rCount++ && console.log(rCount)
    switch (req.url){
        case '/projects':
            res.write('My projects\n'+'My count is '+rCount);
            break;
        case '/contacts':
            res.write('My phone number is\n'+'My count is '+rCount);
            break;
        case '/favicon.ico':

            res.setHeader('Content-Type', 'image/png');
            const fileStream = fs.createReadStream(__dirname+"/favicon.png");
            fileStream.pipe(res);
            return;
            break
        case '/':
            res.write('Welcome');
            break;
        default: res.write('not found')

    }
    res.end();
})
server.listen(3003);


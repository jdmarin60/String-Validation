const http = require('http')
const qs = require('querystring')
const validator = require('./validator')

const port = 3000
const hostname = '127.0.0.1'
 
const server = http.createServer((req, res) => {
  console.dir(req.param);
  console.log(req.method);
 
  if (req.method == 'POST') {
    console.log('POST')
    var body = ''
    req.on('data', function(data) {
      body += data
    })
 
    req.on('end', function() {
        const post = qs.parse(body)
        const inputText = post.inputText;
        const result = validator.check(inputText);
        console.log(result);
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html');
        res.end('Result: ' + result)
    })
  } else {
    var html = `
            <html>
                <body>
                    <form method="POST" action="/">
                    Numbers: 
                        <input type="text" name="inputText">
                        <input type="submit" value="Add">
                    </form>
                </body>
            </html>`
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    res.end(html)
  }
})
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
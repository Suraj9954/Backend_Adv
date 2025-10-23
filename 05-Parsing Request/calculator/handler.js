const {sumHandler} = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h1>Welcome to Calculator</h1>
                    <a href="/calculator">Go to Calculator</a>
                </body>
            </html>`
        );
        return res.end();
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h1>Welcome to Calculator</h1>
                    <form action="/calculate-result" method="POST">
                        <input type="number" name="num1" placeholder="First Number" required>
                        <input type="number" name="num2" placeholder="Second Number" required>
                        <button type="submit">Calculate Sum</button>
                    </form>
                </body>
            </html>`
        );
        return res.end();
    }
    else if(req.url === '/calculate-result' && req.method === 'POST'){
        sumHandler(req, res);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>404 Not Found</title>
                </head>
                <body>
                    <h1>404 Not Found</h1>
                    <p>The requested resource was not found.</p>
                </body>
            </html>`
        );
        return res.end();
    }
    
}

exports.requestHandler = requestHandler;
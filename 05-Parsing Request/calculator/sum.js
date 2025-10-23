const sumHandler = (req, res) => {
    const body = [];
    req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', () => {
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        const num1 = parseFloat(params.get('num1'));
        const num2 = parseFloat(params.get('num2'));
        const sum = num1 + num2;
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head>
                    <title>Calculator - Result</title>
                </head>
                <body>
                    <h1>Calculation Result</h1>
                    <p>The sum of ${num1} and ${num2} is ${sum}.</p>
                    <a href="/calculator">Go back to Calculator</a>
                </body>
            </html>`
        );
        return res.end();
    });
}
exports.sumHandler = sumHandler;
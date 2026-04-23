const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end(`
            <html>
                <body>
                    <h1>Home Page</h1>
                    <p>Welcome to Home Page</p>
                </body>
            </html>
        `);
    } 
    else if (req.url === '/about') {
        res.end(`
            <html>
                <body>
                    <h1>About Page</h1>
                    <p>This is About Page</p>
                </body>
            </html>
        `);
    } 
    else if (req.url === '/contact') {
        res.end(`
            <html>
                <body>
                    <h1>Contact Page</h1>
                    <p>Email: example@gmail.com</p>
                </body>
            </html>
        `);
    } 
    else {
        res.end(`
            <html>
                <body>
                    <h1>404 Error</h1>
                    <p>Page Not Found</p>
                </body>
            </html>
        `);
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
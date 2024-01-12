// console.log("hello world")
const http = require('http');
// const router= http.Router();
const hostname = '127.0.0.1';
const PORT= 3000;

//commented out so i can follow new createServer call below
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// })

const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/html');  res.write('<h1 style="color: red">Hello World!</h1>');  res.write('<p>I wonder what else we can send...</p>');  res.end();});

/** Finally, we need to tell the server to actually listen for communications. We do this by calling the listen method of the server object we just created, and passing it the port and hostname we previously defined. It also accepts a callback function that we can use to indicate that the server is running. */
///test
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

// having a hard time making a route
// router.use((req,res, next)=> {
//     console.log('requested');
//     next();
// })

// router
//     .route('/')
//     .get((req, res) => {
//         res.send('This is a GET Request !');
//     });
//     router.get('/:userID/profile/:data', (req, res) => {
//         res.send(req.params);
//     });
// console.log('hi')
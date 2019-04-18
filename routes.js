const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello User</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
    res.write(
      '<form method="POST" action="/create-user"><input name="username" type="text" /><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    req.on('data', chunk =>
      console.log(`Your username is: ${chunk.toString().split('=')[1]}`)
    );

    req.on('end', () => {
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

module.exports = requestHandler;

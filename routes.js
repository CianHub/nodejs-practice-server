const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello User</title></head>');
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = requestHandler;

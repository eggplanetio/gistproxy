const PORT = 3000;
const app = require('express')();
const requestProxy = require('express-request-proxy');

const opts = {
  url: "https://api.github.com/gists/:id",
}

if (process.env.GITHUB_TOKEN) {
  opts['headers'] = {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`
  }
}

app.get('/api/:id', requestProxy(opts));
app.listen(PORT, '0.0.0.0', () => console.log(`Proxy alive on ${PORT}`));

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;
const ROOT = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';

  const filePath = path.join(ROOT, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Support range requests for video streaming
  const stat = fs.statSync(filePath);
  const total = stat.size;
  const range = req.headers.range;

  if (range && ext === '.mp4') {
    const parts = range.replace(/bytes=/, "").split("-");
    const partialstart = parts[0];
    const partialend = parts[1];

    const start = parseInt(partialstart, 10);
    const end = partialend ? parseInt(partialend, 10) : total - 1;
    const chunksize = (end - start) + 1;

    const file = fs.createReadStream(filePath, { start: start, end: end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': total,
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});

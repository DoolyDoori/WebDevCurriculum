// HTTP 라이브러리인 http와 url을 가져옵니다.
const http = require('http');
const url = require('url');

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  // 요청의 URL을 파싱하여 경로를 추출합니다.
  const { pathname } = url.parse(req.url, true);

  // POST 요청이 `/foo` 경로로 전송된 경우
  if (req.method === 'POST' && pathname === '/foo') {
    // 요청의 본문을 읽어 JSON으로 파싱합니다.
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        // 파싱된 데이터에 `bar` 키가 존재하는 경우
        const data = JSON.parse(body);
        if (data && data.bar) {
          // "Hello, {bar}" 형식의 문자열을 응답합니다.
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Hello, ${data.bar}`);
        }
      } catch (err) {
        // 400 Bad Request 오류를 반환합니다.
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid JSON format');
      }
    });
  } else {
    // "Hello World!" 형식의 문자열을 응답합니다.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }
});

// HTTP 서버를 포트 8080에서 실행합니다.
server.listen(8080);

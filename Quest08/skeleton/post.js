const http = require('http');
// HTTP 라이브러리인 http를 가져옵니다.

const postData = JSON.stringify({ bar: 'chan' });
// POST 요청의 본문으로 사용할 JSON 데이터를 생성합니다.

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/foo',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};
// HTTP 요청의 옵션을 설정합니다.

const req = http.request(options, (res) => {
  let data = '';
  // 응답의 본문을 수신할 변수를 생성합니다.

  res.on('data', (chunk) => {
    data += chunk;
  });
  // 응답의 본문이 전송될 때마다, data에 새 데이터를 추가합니다.

  res.on('end', () => {
    console.log(data);
    // 응답의 본문이 전송이 완료되면, data를 콘솔에 출력합니다.
  });
});
// HTTP 요청을 생성하고, 요청이 완료되면 응답을 수신하는 콜백 함수를 설정합니다.

req.on('error', (error) => {
  console.error(error);
});
// HTTP 요청이 실패하면 오류를 출력하는 콜백 함수를 설정합니다.

req.write(postData);
req.end();
// 요청의 본문을 전송하고, 요청을 종료합니다.

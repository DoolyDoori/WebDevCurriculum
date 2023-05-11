# Quest 08. 웹 API의 기초

## Introduction
* 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics
* HTTP Method
* node.js `http` module
  * `req`와 `res` 객체

## Resources
* [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
* [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
* [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist
* HTTP의 GET과 POST 메소드는 어떻게 다른가요?
  
  * HTTP의 GET과 POST 메소드는 둘 다 HTTP 요청 메소드로서 웹 브라우저와 웹 서버 간의 통신에서 사용됩니다.

    * GET 메소드는 주로 서버로부터 정보를 가져오는 데 사용됩니다. 이 메소드는 요청한 URL의 쿼리 파라미터를 통해 데이터를 전달하며, 서버는 해당 URL의 리소스를 반환합니다. 즉, GET 요청은 서버로부터 데이터를 받아와 클라이언트 측에서 그 데이터를 이용하는 것입니다. GET 메소드는 캐싱이 가능하며, 브라우저의 뒤로 가기 버튼과 같은 브라우저 기능과 잘 작동합니다. 또한, GET 요청은 브라우저의 URL 창에 표시되므로, 이를 통해 요청한 페이지의 주소를 직접 입력하여 접근할 수 있습니다.

    * 반면에, POST 메소드는 주로 서버에 데이터를 제출하기 위해 사용됩니다. 이 메소드는 HTTP 요청 본문에 데이터를 포함하며, 서버는 해당 데이터를 처리하고 결과를 반환합니다. POST 요청은 서버에 데이터를 제출하는 것으로, 요청한 페이지의 주소는 POST 요청 이전의 주소가 표시됩니다. POST 요청은 브라우저에서 캐싱되지 않으며, 브라우저 기능과 함께 사용할 때 문제가 발생할 수 
    있습니다. 또한, 보안상의 이유로 POST 요청은 CSRF(Cross-Site Request Forgery) 공격에 노출될 수 있습니다.

  * 따라서, GET 메소드는 정보를 가져오는 데 사용되며, POST 메소드는 데이터를 제출하는 데 사용됩니다.

  * 다른 HTTP 메소드에는 무엇이 있나요?
    * PUT: 서버에 리소스를 업데이트하기 위해 사용되는 메소드 -> HTTP 요청 본문에 업데이트된 데이터를 포함하여 서버에 전송합니다.
    * DELETE: 서버에서 리소스를 삭제하기 위해 사용되는 메소드입니다.
    * HEAD: GET 메소드와 동일하지만, 서버에서 리소스의 메타데이터(헤더)만 가져옵니다.
    * OPTIONS: 서버에서 지원되는 메소드의 종류를 가져오기 위해 사용되는 메소드입니다.
    * TRACE: 서버에게 클라이언트 요청이 서버에 도달하는 과정에서 어떤 변화가 있는지 확인하기 위해 사용되는 메소드입니다.
    * CONNECT: 프록시 서버와 터널링하기 위해 사용되는 메소드입니다.


* HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?

  *  클라이언트에서 HTTP 요청을 생성하고, 해당 요청에 필요한 데이터를 추가하여 보내야한다.

    * 1. GET 요청 보내기: GET 요청은 URL에 데이터를 쿼리 파라미터로 추가하여 보내면 됩니다. 예를 들어, 다음과 같은 URL을 사용하여 "id"라는 쿼리 파라미터의 값을 123으로 설정한 GET 요청을 보낼 수 있습니다

    ``` 
    https://example.com/data?id=123

    ```
    * 2. POST 요청 보내기: POST 요청은 HTTP 요청 본문에 데이터를 추가하여 보내야 합니다. 이때, 데이터는 보통 HTML 폼(form)의 필드 값이나 JSON 형태로 전송됩니다. 예를 들어, 다음과 같은 HTML 폼을 사용하여 "name" 필드와 "age" 필드의 값을 각각 "Doori"과 25으로 설정한 POST 요청을 보낼 수 있습니다.

    ``` 
    <form method="POST" action="https://example.com/data">
  <input type="text" name="name" value="Doori">
  <input type="text" name="age" value="25">
  <button type="submit">Submit</button>
  </form>

    ```
    * 위의 HTML 폼에서 "method" 속성이 "POST"로 설정되어 있으며, "action" 속성이 요청을 보낼 URL로 설정되어 있습니다. 또한, "name" 속성이 "name"과 "age"로 설정된 두 개의 입력 필드가 있습니다. 이 입력 필드의 값을 전송할 때는 "name" 속성 값을 사용합니다. 따라서, 위의 HTML 폼에서 전송되는 데이터는 다음과 같이 HTTP 요청 본문에 포함됩니다.
    
    ``` name=John&age=30 ```




  * HTTP 요청의 `Content-Type` 헤더는 무엇인가요?
    * `Content-Type`은 HTTP 요청 본문에 포함된 데이터의 유형을 지정하며 서버에게 요청 본문을 어떻게 처리해야하는지 알려주는 역할을 합니다.

      * Content-Type 헤더는 일반적으로 MIME 타입으로 지정됩니다. MIME(Multipurpose Internet Mail Extensions)은 인터넷에서 전자 메일과 같은 데이터를 전송하기 위해 개발된 프로토콜입니다. Content-Type 헤더는 이러한 MIME 타입을 사용하여 요청 본문의 데이터 유형을 정의합니다.

      
      * HTML 폼으로 전송된 데이터의 경우 Content-Type 헤더는 다음과 같이 설정됩니다.(1)

      JSON 데이터를 포함하는 HTTP 요청의 경우 Content-Type 헤더는 다음과 같이 설정됩니다.(2)

      ``` 
      # (1)

      Content-Type: application/x-www-form-urlencoded

      # application/x-www-form-urlencoded은 HTML 폼 데이터의 MIME 타입을 나타냅니다.

      # (2)

      Content-Type: application/json

      # application/json은 JSON 데이터의 MIME 타입을 나타냅니다.

      ```
      * `Content-Type` 헤더는 서버에서 요청 본문을 처리하기 위한 정보를 제공하므로, 올바른 값으로 설정해야 합니다. 요청 본문의 MIME 타입을 정확하게 지정하지 않으면 서버가 데이터를 잘못 처리할 수 있습니다.

  * Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?
    * 1. `form-data` 방식은 파일 업로드를 지원하는 방식입니다. 주로 파일과 같은 바이너리 데이터를 전송할 때 사용됩니다. 이 방식은 HTML 폼 데이터를 전송하는 것과 유사합니다. 키와 값의 쌍으로 이루어진 데이터를 전송할 수 있습니다. 예를 들어, 이미지 파일, 오디오 파일, 비디오 파일 등을 업로드할 때 사용됩니다.

    * 2. `x-www-form-urlencoded` 방식은 폼 데이터를 전송하는 데 사용됩니다. 이 방식은 `form-data` 방식과 비슷하지만, 키-값 쌍을 URL 인코딩하여 전송합니다. 예를 들어, 로그인 정보, 회원가입 양식, 검색어, 토큰 등을 전송할 때 사용됩니다.

    * 3. `raw` 방식은 요청 본문에 직접 JSON, XML, HTML 등의 데이터를 입력하여 전송하는 방식입니다. 이 방식은 주로 JSON 데이터를 전송할 때 사용됩니다. 예를 들어, REST API에서 요청 본문에 JSON 데이터를 전송할 때 사용됩니다.

    * 4. `binary` 방식은 바이너리 데이터를 전송하는 방식입니다. 이 방식은 `form-data` 방식과 비슷하지만, 요청 본문에서 바이너리 데이터를 바로 전송합니다. 이 방식은 주로 이미지, 오디오, 비디오 등의 바이너리 데이터를 전송할 때 사용됩니다.

* node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,
  * `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?

    * req 객체는 클라이언트로부터 수신한 HTTP 요청에 대한 정보를 담고 있으며 다음과 같은 정보가 포함됩니다


      1. `req.url`: 클라이언트가 요청한 URL
      2. `req.method`: HTTP 요청 메서드 (GET, POST, PUT, DELETE 등)
      3. `req.headers`: HTTP 요청 헤더
      4. `req.httpVersion`: HTTP 버전 (1.0, 1.1 등)
      5. `req.socket`: 요청에 대한 소켓 정보

    * `res` 객체는 서버에서 클라이언트로 HTTP 응답을 보낼 때 사용되며 다음과 같은 정보가 담겨있습니다.
      1. `res.statusCode`: HTTP 응답 상태 코드 (200, 404, 500 등)
      2. `res.statusMessage`: HTTP 응답 상태 메시지 (OK, Not Found, Internal Server Error 등)
      3. `res.setHeader(name, value)`: HTTP 응답 헤더 설정
      4. `res.write(data)`: 클라이언트로 데이터 전송
      5. `res.end()`: HTTP 응답 종료


  * GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?

    * 두 메서드는 서버에 요청하는 방식과 요청 데이터를 전달하는 방식에서 차이가 있습니다. 이에 따라 서버에서는 GET과 POST 요청을 처리하는 방식이 달라집니다.

      * GET 요청은 주로 URL을 통해 데이터를 전달하며, 요청한 리소스의 정보를 서버로부터 가져오기 위해 사용됩니다. GET 요청은 요청 데이터가 URL 뒤에 query string 형태로 전달되기 때문에, 서버에서는 해당 query string을 파싱하여 필요한 데이터를 추출합니다. GET 요청은 요청 데이터가 URL에 노출되므로, 보안상 취약점이 존재할 수 있습니다. 따라서 민감한 데이터는 GET 요청으로 전달하면 안됩니다.

      * 반면에, POST 요청은 HTTP 메시지 바디(body)에 데이터를 담아서 서버로 전송합니다. POST 요청은 주로 새로운 리소스를 생성하거나, 기존 리소스를 수정하거나 삭제하는 등의 요청에 사용됩니다. POST 요청은 요청 데이터가 HTTP 메시지 바디에 포함되기 때문에, URL에 데이터가 노출되지 않아 GET 요청보다 보안적으로 안전합니다.

    * 따라서 GET과 POST는 각각 다른 용도와 데이터 전송 방식을 가지고 있으므로, 서버에서는 GET과 POST 요청을 처리하는 방식이 달라집니다. GET 요청은 URL의 query string에서 데이터를 추출하고, POST 요청은 HTTP 메시지 바디에서 데이터를 추출하여 처리합니다.


* 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?

  * 1. 미들웨어를 사용하여 `Content-Type`에 따라 요청 처리하기
HTTP POST 요청의 `Content-Type` 헤더를 분석하여, 요청을 처리할 미들웨어를 선택하는 방식입니다. 이 방식은 서버에서 미들웨어를 작성하여 HTTP 요청의 `Content-Type` 헤더에 따라 적절한 처리를 수행하도록 구현할 수 있습니다.

  * 2. URL 경로를 이용하여 요청 처리하기
API 엔드포인트의 URL 경로를 이용하여, 요청을 처리할 API 핸들러를 선택하는 방식입니다. 예를 들어, `/api/v1/user/create`와 같은 URL 경로가 있다면, `/api/v1/user`를 처리할 API 핸들러를 선택한 후, `create`에 대한 처리를 수행할 수 있습니다.

  * 3. API 핸들러에서 분기하여 처리하기
API 엔드포인트를 처리하는 핸들러에서 `Content-Type`헤더에 따라 분기하여 처리하는 방식입니다. 이 방식은 코드 중복이 발생할 수 있기 때문에, 코드의 일관성과 가독성을 유지하기 위해서는 잘 구조화된 함수 및 클래스를 사용하는 것이 좋습니다.

* 가장 중요한 것은, API의 설계와 구현을 일관성 있게 유지하며, 개발자들이 쉽게 이해하고 유지보수할 수 있도록 하는 것이다.

  * 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?
    
    * 1. 로깅 : 서버가 받은 요청과 응답에 대한 로그를 기록하는 것입니다. 로깅은 서버의 성능 모니터링 및 디버깅, 보안 등의 이유로 중요합니다.

    * 2. 에러 처리: 서버가 요청을 처리하다가 에러가 발생했을 경우, 적절한 응답을 보내거나 에러를 기록하는 등의 처리를 수행하는 것입니다.
    
    * 3. 인증 및 권한 부여: 서버에 접근하는 사용자를 인증하고, 그 사용자의 권한에 따라 요청을 처리하는 것입니다. 보안에 매우 중요한 역할을 합니다.
    
    * 4. 캐싱: 서버가 같은 요청을 받았을 때, 이전에 처리한 결과를 캐싱하여 서버의 부하를 줄이는 것입니다.
    
    * 5. API 문서화: API 엔드포인트의 목록과 각각의 요청/응답 형식 등을 문서화하여 개발자들이 API를 사용하기 쉽도록 하는 것입니다.

    * 이러한 공통적인 처리를 위해서는 미들웨어를 사용하는 것이 일반적입니다. 미들웨어는 서버가 처리하는 모든 요청에 대해 실행되며, 요청에 대한 처리 전후에 추가적인 작업을 수행할 수 있습니다. 이를 통해 서버의 코드 중복을 줄이고, 일관성 있는 처리를 할 수 있습니다. 또한, 미들웨어는 보안, 로깅, 캐싱 등의 기능을 수행하기 위한 라이브러리도 제공합니다.



## Quest
* 다음의 동작을 하는 서버를 만들어 보세요.
  * 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  * 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  * 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  * 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  * 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
* expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
* 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced
* 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?

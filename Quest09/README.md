# Quest 09. 서버와 클라이언트의 대화

## Introduction
* 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics
* expressJS, fastify
* AJAX, `XMLHttpRequest`, `fetch()`
* REST, CRUD
* CORS

## Resources
* [Express Framework](http://expressjs.com/)
* [Fastify Framework](https://www.fastify.io/)
* [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [REST API Tutorial](https://restfulapi.net/)
* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Checklist
* 비동기 프로그래밍이란 무엇인가요?

  * 비동기 프로그래밍(Asynchronous Programming)은 프로그램이 한 가지 작업을 처리할 때 다른 작업도 함께 처리할 수 있는 방법입니다.

  * 작업을 실행하면서 다른 코드를 실행할 수 있으므로, 시간적으로 효율적인 프로그램을 작성할 수 있습니다.

  * 비동기 프로그래밍은 일반적으로 이벤트 기반(Event-driven) 또는 콜백(Callback) 기반으로 작성됩니다. 이벤트 기반 비동기 프로그래밍에서는 작업이 완료되면 이벤트를 발생시켜서 다음 작업을 실행하게 합니다. 콜백 기반 비동기 프로그래밍에서는 작업이 완료되면 미리 등록해둔 콜백 함수를 호출하여 다음 작업을 실행하게 합니다.

  * 비동기 프로그래밍은 주로 네트워크 통신, 파일 입출력, GUI 이벤트 처리 등의 I/O 작업에서 많이 사용됩니다.-> 일반적으로 시간이 많이 걸리는 작업을 효울적으로 처리 할 수 있게 해준다.

  * 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?

    * 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 코드의 복잡도가 증가하고 디버깅이 어렵다는 것 입니다.

    * 콜백 함수를 연속해서 사용하다보면 콜백 함수 안에서 또 다른 콜백 함수를 호출하는 중첩된 코드가 발생할 수 있습니다. 이를 콜백 지옥(Callback Hell)이라고 합니다.

  
  * 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?

    * Promise는 비동기 작업의 결과를 나타내는 객체로, 이후에 이를 처리하는 메서드를 체인 형태로 연결할 수 있습니다. 이를 통해 중첩된 콜백 함수를 사용하지 않고도 비동기 작업을 처리할 수 있습니다.

  * 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?

    * async/await는 ES2017에서 도입된 기능으로, Promise를 기반으로 하며 콜백 지옥을 해결하는 데 사용됩니다. async 함수는 Promise를 반환하며, await 키워드를 사용하여 Promise가 처리될 때까지 코드 실행을 일시 중지할 수 있습니다. 이를 통해 콜백 함수 대신 보다 간결하고 직관적인 코드를 작성할 수 있습니다.

* 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?
  * 1. script 태그를 사용하여 외부 자바스크립트 파일을 가져올 수 있습니다. (<script>) -> 웹페이지가 로드될 때 자동으로 JS파일을 가져오므로 스크립트 파일을 펼도로 다운로드하고 로드하지 않아도 되므로 효율적이다.

  * 2. AJAX(XMLHttpRequest)를 사용하여 서버로부터 데이터를 가져올 수 있습니다. -> 비동기적으로 데이터를 가져오기 때문에 페이지 로드 시간이 더 빨라질 수 있습니다.
  ``` 
  //예시

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'path/to/external/resource');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Request failed. Status code: ' + xhr.status);
    }
  };
  xhr.send();

  ```

  * 3. Fetch API를 사용하여 서버로부터 데이터를 가져올 수 있습니다.
  -> Fetch API는 Promise를 반환하므로 Promise 체이닝을 사용하여 데이터를 처리할 수 있습니다.

  ``` 
  //예시

  fetch('path/to/external/resource')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  ```
  * 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?
    
    * `XMLHttpRequest`는 브라우저 내장 객체로서, 서버와의 비동기적인 데이터 교환을 가능하게 합니다. 이를 통해 웹 페이지에서 동적으로 데이터를 가져오거나 전송할 수 있습니다. 

    * 다음과 같은 매서드를 반환합니다.

      1. `open(method, url, async)`: HTTP 요청을 준비합니다. `method`는 HTTP 요청 메서드(GET, POST 등)를 지정합니다. `url`은 요청을 보낼 URL을 지정합니다. `async`는 요청을 비동기적으로 처리할지 여부를 지정합니다.

      2. `send(data)`: HTTP 요청을 서버로 보냅니다. `data`는 POST 요청 시 함께 보낼 데이터를 지정합니다.

      3. `abort()`: 요청을 중단합니다.

      4. `setRequestHeader(name, value)`: 요청에 대한 HTTP 헤더를 설정합니다.

      5. `getResponseHeader(name)`: 서버로부터 받은 HTTP 응답 헤더 중에서 지정한 이름의 값을 반환합니다.

      6. `getAllResponseHeaders()`: 서버로부터 받은 모든 HTTP 응답 헤더를 반환합니다.

    * 요청이 완료되면 `readystatechange` 이벤트가 발생합니다. 이벤트 핸들러에서 `readyState`와 `status` 프로퍼티를 확인하여 요청이 성공적으로 완료되었는지, 실패했는지 여부를 파악할 수 있습니다.

      * readyState 프로퍼티는 요청의 상태를 나타내며, 다음과 같은 값 중 하나를 가질 수 있습니다.

        * `0` (UNSENT): 아직 `open()` 메서드가 호출되지 않은 상태
        * `1` (OPENED): `open()` 메서드가 호출된 상태
        * `2` (HEADERS_RECEIVED): 서버로부터 응답 헤더를 받은 상태
        * `3` (LOADING): 서버로부터 응답 본문을 받는 중인 상태
        * `4` (DONE): 요청이 완료된 상태

      * `status` 프로퍼티는 요청의 HTTP 상태 코드를 나타내며, 다음과 같은 값 중 하나를 가질 수 있습니다.
        
        * `200`: 요청이 성공적으로 완료된 경우

        * `404`: 요청한 자원을 찾을 수 없는 경우

        * `500`: 서버 내부 오류가 발생한 경우 등


  * `fetch` API는 무엇이고 어떻게 동작하나요?

    * `fetch` API는 JavaScript의 내장 API로, 네트워크 요청을 보내는 기능을 제공합니다. 이를 통해 서버로부터 데이터를 가져오거나 서버에 데이터를 전송할 수 있습니다. `fetch`는 Promise를 반환하며, 이를 통해 비동기적인 요청을 처리할 수 있습니다.

      ``` 
      // 다음과 같은 형태로 사용될 수 있다.

      fetch(url, options)
      .then(response => {
          // 응답 처리 로직
       })
       .catch(error => {
          // 오류 처리 로직
       });

      ```

    *  `url` 매개변수는 요청을 보낼 URL을 지정하며, `options` 매개변수는 HTTP 요청에 대한 옵션을 설정합니다. `options` 매개변수는 생략 가능하며, 생략된 경우 기본값으로 GET 요청을 보냅니다.

    ```
    options 매개변수는 다음과 같은 프로퍼티를 가질 수 있습니다.

    - method: HTTP 요청 메서드를 지정합니다. 기본값은 GET입니다.
    - headers: HTTP 요청 헤더를 지정합니다.
    - body: HTTP 요청 본문을 지정합니다. POST 요청 등에서 사용됩니다.
    - mode: 요청 모드를 지정합니다. 기본값은 cors입니다.
    - cache: 요청 캐시 정책을 지정합니다. 기본값은 default입니다.
    - redirect: 리다이렉션 정책을 지정합니다. 기본값은 follow입니다.- referrer: Referer 헤더를 지정합니다.
    - referrerPolicy: Referer 정책을 지정합니다.
    - integrity: 서버 응답의 무결성을 검사하기 위한 무결성 체크값을 지정합니다.

    ```
    * `fetch` 함수는 Promise를 반환하며, `then` 메서드에서 HTTP 응답을 처리할 수 있습니다. HTTP 응답은 Response 객체로 표현됩니다. Response 객체는 다음과 같은 메서드를 제공합니다.

    ```
    - ok: 응답이 성공했는지 여부를 반환합니다.
    - status: HTTP 상태 코드를 반환합니다.
    - statusText: HTTP 상태 코드에 대한 설명을 반환합니다.
    - headers: HTTP 응답 헤더를 나타내는 Headers 객체를 반환합니다.
    - text(): HTTP 응답 본문을 문자열로 변환하여 반환합니다.
    - json(): HTTP 응답 본문을 JSON 객체로 변환하여 반환합니다.
    - blob(): HTTP 응답 본문을 Blob 객체로 반환합니다.
    - arrayBuffer(): HTTP 응답 본문을 ArrayBuffer 객체로 반환합니다.
    
    ```
* REST는 무엇인가요?

    * REST란 Representational State Transfer의 약어로, 웹의 분산 하이퍼미디어 시스템을 위한 아키텍처 스타일 중 하나이며, 클라이언트와 서버 사이의 통신 방식을 규정합니다.
    
      * 다음과 같은 특징을 가지고 있습니다.
    ``` 
    1. 자원 지향 아키텍처 (Resource-Oriented Architecture): 모든 자원에 고유한 URI를 부여하여 자원을 표현하고, HTTP Method(GET, POST, PUT, DELETE)를 사용하여 자원에 대한 CRUD(Create, Read, Update, Delete) 작업을 수행합니다.

    2. Stateless: REST 서버는 각 요청 사이에 상태를 유지하지 않으며, 클라이언트의 상태를 저장하지 않습니다. 이러한 특징은 서버의 확장성과 장애 극복 능력을 향상시킵니다.

    3. Cacheable: 클라이언트는 서버의 응답을 캐시하여 재사용할 수 있습니다. 이러한 특징은 응답 시간을 단축시켜 서버의 부하를 줄이는 효과를 가집니다.

    4. 계층 구조 (Layered System): REST 서버는 다중 계층으로 구성될 수 있습니다. 클라이언트는 REST 서버에 요청을 보내고, 중간에 프록시 서버, 게이트웨이 등을 거쳐 목적지에 도달할 수 있습니다.

    5. 인터페이스 일관성 (Uniform Interface): REST 서버와 클라이언트 간의 인터페이스는 일관성 있게 설계되어야 합니다. 이를 위해 REST 서버는 자원의 식별, 요청의 메타데이터, 자원의 상태 등을 제공해야 합니다.

    ```


  * REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?

    * REST API는 Representational State Transfer API의 약어로, REST 아키텍처 스타일을 따르는 API를 의미합니다. REST API는 HTTP 기반으로 자원(Resource)을 주고 받는 웹 API이며, 자원은 URI(Uniform Resource Identifier)로 표현됩니다.

      * 목적 :다양한 클라이언트에서 서비스를 공유하고 연동하기 위한 표준 인터페이스를 제공하는 것

      * 장점:

      ```
      확장성: REST API는 HTTP를 기반으로 하므로, HTTP를 지원하는 모든 플랫폼에서 사용이 가능합니다. 또한 자원(Resource)을 이용한 URI를 통해 상태 정보를 전송하므로, 다양한 형태의 클라이언트와 서버 간의 통신을 지원합니다.

      유연성: REST API는 자원(Resource)의 구조와 상태(State)를 표현하기 위해 다양한 데이터 포맷(XML, JSON, YAML 등)을 지원합니다. 따라서 REST API를 사용하는 클라이언트는 원하는 데이터 형식으로 결과를 요청할 수 있습니다.

      캐싱 기능: REST API는 HTTP 프로토콜을 기반으로 하므로, HTTP의 캐싱 기능을 활용할 수 있습니다. 이를 통해 API 요청 시 서버에 부하를 줄이고, 응답 시간을 단축할 수 있습니다.

      분리된 클라이언트-서버 구조: REST API는 클라이언트와 서버를 분리하여 구현할 수 있습니다. 이를 통해 서로간의 의존성을 낮추고, 서버와 클라이언트의 독립적인 발전을 가능하게 합니다.

      가독성: REST API는 자원(Resource)을 URI로 표현하므로, URI 자체가 어떤 리소스를 의미하는지 명확하게 알 수 있습니다. 따라서 API를 사용하는 클라이언트는 URI를 보고도 API가 제공하는 서비스를 쉽게 이해할 수 있습니다.

      보안성: REST API는 HTTPS 프로토콜을 지원하므로, 보안이 중요한 API 서비스에서도 안전하게 사용이 가능합니다. 또한 HTTP Method를 통해 CRUD(Create, Read, Update, Delete) 작업을 수행하기 때문에, 서버의 데이터를 안전하게 처리할 수 있습니다.

      ```

  * RESTful한 API 설계의 단점은 무엇인가요?

    * 단점
    ``` 
    * 복잡성: RESTful한 API 설계는 자원(Resource)을 중심으로 설계되기 때문에, 자원 간의 관계가 복잡할 경우 설계가 어려울 수 있습니다. 이를 해결하기 위해 하이퍼미디어(Hypermedia)를 활용하는 HATEOAS(Hypermedia as the Engine of Application State) 방식을 사용할 수 있지만, 이를 구현하기 위한 추가적인 노력이 필요합니다.

    * 표준화의 부재: RESTful한 API 설계는 REST 아키텍처 스타일을 따르는 것이지만, 표준화된 방법이 없기 때문에, API 설계자마다 차이가 있을 수 있습니다. 이를 해결하기 위해 Swagger와 같은 API 문서화 도구를 사용하거나, 일관된 명명규칙을 사용할 수 있지만, 이 또한 추가적인 노력이 필요합니다.

    * 성능 이슈: RESTful한 API는 자원(Resource)을 URI로 표현하므로, URI의 길이가 길어질 수 있습니다. 이는 HTTP 요청 시에 URI의 길이 제한으로 인해 성능 이슈를 발생시킬 수 있습니다. 이를 해결하기 위해 URI의 길이를 줄이거나, HTTP 요청 방식을 변경하는 등의 대안을 고려할 수 있습니다.

    * 보안 이슈: RESTful한 API는 HTTP 프로토콜을 기반으로 하므로,  HTTP 헤더 정보를 이용한 보안 위협이 존재할 수 있습니다. 이를 해결하기 위해 HTTPS 프로토콜을 사용하거나, HTTP 요청에 대한 인증과 권한 부여 등의 보안 대책을 추가적으로 구현해야 합니다.

    * 버전 관리: RESTful한 API는 URI를 통해 자원(Resource)을 표현하기 때문에, API 버전 관리가 어려울 수 있습니다. 이를 해결하기 위해 URI에 버전 정보를 포함시키거나, HTTP 요청 헤더 정보를 이용하는 방법 등이 있지만, 일관된 버전 관리를 위해서는 추가적인 노력이 필요합니다.

    ```


* CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?

```
  * CORS(Cross-Origin Resource Sharing)란 웹 브라우저에서 실행되는 스크립트가 다른 도메인(Origin)에서 제공하는 리소스에 접근할 수 있도록 해주는 보안 기술입니다.

  * CORS의 필요성: 웹 애플리케이션에서 다른 도메인의 리소스를 요청하여 사용하는 경우가 많기 때문입니다. 예를 들어, AJAX 요청을 통해 다른 도메인의 API를 호출하거나, 웹 폰트나 이미지 파일 등을 다른 도메인에서 가져와 사용하는 경우가 이에 해당됩니다. 
  이러한 경우, 웹 보안 모델의 동일 출처 정책에 의해 접근이 차단되므로, CORS를 통해 이를 우회하여 다른 도메인의 리소스를 사용할 수 있게 됩니다.

  * CORS의 구현방법:  서버 측에서 구현되며, 클라이언트 측에서 요청한 리소스에 대한 응답 헤더에 Access-Control-Allow-Origin이라는 헤더를 추가하여 구현됩니다. 
  이 헤더는 클라이언트 측에서 요청한 도메인을 명시하여, 
  해당 도메인에서만 접근할 수 있도록 허용합니다.
```


## Quest
* 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  * 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
* Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  * 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  * 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  * 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    * 서버에 어떤 식으로 저장하는 것이 좋을까요?
  * API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  * Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
* 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
* 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced
* `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
* REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?

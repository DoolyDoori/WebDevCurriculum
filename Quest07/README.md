# Quest 07. node.js의 기초

## Introduction
* 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics
* node.js
* npm
* CommonJS와 ES Modules

## Resources
* [About node.js](https://nodejs.org/ko/about/)
* [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
* [npm](https://docs.npmjs.com/about-npm)
* [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
* [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
* [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist
* node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?
  * Node.js는 구글 크롬의 V8 자바스크립트 엔진을 기반으로 하는 서버 사이드 자바스크립트 런타임입니다. 
  Node.js는 자바스크립트를 사용하여 서버 측 애플리케이션을 만들 수 있도록 해주는 오픈 소스 플랫폼입니다.

  * Node.js의 내부는 다양한 모듈로 구성되어 있습니다. 
  이러한 모듈은 자바스크립트로 작성되며, Node.js 환경에서 실행되며, 
  Node.js 애플리케이션에서 사용할 수 있습니다. Node.js는 내장된 모듈과 외부 모듈을 모두 지원합니다.
    * 내장된 모듈중 일부
      1. HTTP: HTTP 서버와 클라이언트를 생성하는 모듈
      2. FS: 파일 시스템을 다루는 모듈
      3. Path: 파일 경로와 관련된 유틸리티를 제공하는 모듈
      4. Events: 이벤트 처리를 위한 모듈
      5. OS: 운영 체제와 관련된 정보를 다루는 모듈

* npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?

  * npm은 Node Package Manager의 약자로, Node.js 애플리케이션에서 사용되는 패키지(모듈)를 관리하는 도구입니다. 
  npm을 사용하여 패키지를 설치하고 업데이트하고, 패키지에 대한 의존성(dependency)을 관리하고, 자신이 만든 패키지를 배포할 수 있습니다. 

  * package.json 파일은 Node.js 프로젝트에서 사용되는 패키지 및 프로젝트 메타 정보를 저장하는 JSON 파일입니다. 
  이 파일은 npm으로 패키지를 관리하는 데 필수적입니다. 



* npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?

  * npx는 npm 패키지를 실행하기 위한 도구입니다. npx는 로컬 또는 글로벌로 설치되어 있지 않은 패키지를 사용하여 명령을 실행할 수 있습니다. 

  *npm 패키지를 -g 옵션을 통해 글로벌로 저장하면 해당 패키지를 컴퓨터 전체에서 사용할 수 있습니다. 
  이는 다른 프로젝트에서도 동일한 패키지를 사용할 수 있도록 해주며, 
  일반적으로 시스템 레벨의 도구와 라이브러리를 설치하는 데 사용됩니다


* 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

  * `<script>` 태그를 이용하여 외부 파일을 로드하는 방법 : 웹 페이지에서 자바스크립트 코드를 로드할 때 자주 사용됩니다. 
  그러나 이 방법은 전역 스코프에서 실행되므로, 변수 충돌이나 의존성 문제 등의 문제가 발생할 수 있습니다.
  
  * CommonJS와 AMD(Asynchronous Module Definition) 등의 모듈 시스템 : 전역 스코프를 오염시키지 않으며, 의존성 관리와 코드 재사용을 간편하게 만들어줍니다.

  ES Modules의 등장이유: CommonJS와 AMD의 단점을 보완하면서도 간단하고 직관적인 문법을 제공하며, Node.js와 브라우저에서 모두 사용할 수 있습니다. 추가적으로 import와 export 키워드를 사용하여 모듈을 정의하고 불러올 수 있으며, 자동적인 비동기 로딩 및 트리 쉐이킹 등의 최적화 기능도 제공하므로 ES6 에서 도입되어 표준 모듈이 되었다.

 
* ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?
  * 문법: require()는 CommonJS 문법을 사용하며, module.exports와 exports 객체를 통해 모듈을 정의합니다. 
    반면에 ES Modules는 import와 export 키워드를 사용하여 모듈을 정의하고 불러옵니다.

  * 로딩 방식: require()는 모듈을 동기적으로 로딩합니다. 이는 코드를 작성하는 과정에서 모듈 로딩이 완료될 때까지 기다려야 하므로, 애플리케이션의 성능을 떨어뜨릴 수 있습니다. ES Modules는 모듈을 비동기적으로 로딩하며, 필요할 때마다 자동으로 로드됩니다.

  * 범위: require()는 모듈을 불러올 때마다 새로운 스코프를 생성합니다. 이는 모듈 간의 변수 충돌을 막을 수 있지만, 모듈 간의 상태 공유를 어렵게 만들 수 있습니다. ES Modules는 모듈 간에 상태를 공유하기 위해 export된 객체를 참조할 수 있습니다.

  * 정적 분석: ES Modules는 정적 분석에 용이합니다. 이는 브라우저에서 자동적으로 트리 쉐이킹을 수행하여 사용하지 않는 코드를 제거하는 등의 최적화 기능을 수행할 수 있습니다.

  * 호환성: require()는 Node.js에서 지원되는 모듈 시스템이며, 브라우저에서는 대부분의 경우 사용할 수 없습니다. 반면에 ES Modules는 브라우저와 Node.js에서 모두 지원됩니다. 하지만, 모든 브라우저에서 ES Modules를 사용할 수 있는 것은 아니므로, 이를 사용하기 위해서는 코드 번들링 도구를 사용해야 할 수도 있습니다.
  ---
  * ES Modules가 할 수 없는 것
    * 동적인 모듈 로딩: CommonJS는 동적으로 모듈을 로딩할 수 있습니다. require() 함수에 변수를 전달하여 런타임에 모듈을 로딩할 수 있습니다.
    반면에 ES Modules는 모듈 로딩이 정적으로 이루어지기 때문에 동적으로 모듈을 로딩할 수 없습니다.

    * 순환 의존성: CommonJS는 순환 의존성을 처리할 수 있습니다. 즉, 모듈 A가 모듈 B를 참조하고, 모듈 B가 다시 모듈 A를 참조하는 경우에도 모듈이 로딩됩니다. 반면에 ES Modules는 순환 의존성을 처리할 수 없으며, 이 경우에는 런타임 에러가 발생합니다.

    * 동기적인 모듈 로딩: CommonJS는 모듈 로딩을 동기적으로 처리할 수 있습니다. require() 함수를 사용하여 필요한 모듈을 동기적으로 로딩할 수 있습니다. 반면에 ES Modules는 모듈 로딩이 비동기적으로 이루어지기 때문에, 동기적으로 모듈을 로딩할 수 없습니다.

    * 모듈 객체: CommonJS는 모듈 객체를 제공합니다. module, exports, require() 함수 등의 객체와 함수를 사용하여 모듈을 정의하고 불러올 수 있습니다. 반면에 ES Modules는 모듈 객체를 제공하지 않으며, import와 export 키워드를 사용하여 모듈을 정의하고 불러옵니다.


* node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?
  * node.js 14버전 부터는  ES Module을 기본적으로 지원한다.
    * 1. `.mjs` 확장자를 가진 파일에서 ES Modules를 사용합니다. Node.js에서는 `.mjs` 확장자를 가진 파일은 ES Modules로 인식됩니다.
    * 2. `.js` 확장자를 가진 파일에서도 ES Modules를 사용하고 싶다면, {"type": "module"} 필드를 `package.json` 파일에 추가합니다.
---
  * ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 require() 함수를 사용합니다. 
  * 반대로, CommonJS 기반의 코드에서 ES Modules 기반의 패키지를 불러오려면 import 구문을 사용할 수 있습니다. 그러나 이 경우에는 default export만을 불러올 수 있습니다.


## Quest
* 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  * `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  * `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
* 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced
* node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?

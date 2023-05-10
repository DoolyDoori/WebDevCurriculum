# Quest 03. 자바스크립트와 DOM

## Introduction
* 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

## Resources
* [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
* [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
* [Just JavaScript](https://justjavascript.com/)

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
  * ES1(1997) -> ES2(1998) -> ES3(1999) -> ES4(2000) -> ES5(2009) -> ES6/ES2015 -> ES7/ES2016 -> ES8/ES2017 -> ES9/ES2018 순으로 발전되어왔다.

  *  **ES6**: const & let 변수선언 사용, 화살표 함수, 비 구조화 할당, for... of 문, Spread Operator,  Default Parameter(기본 매개변수), iterator / generator 추가, module import / export 추가, Promise 도입, 

  * **ES7 / ES2016**: Array.protorype.includes(), Exponentiation oprator "**"(제곱)

  *  **ES8 / ES2017**: String padding, Object.values and Object.entries, Object.getOwnPropertyDescriptors, Trailing commas in function parameter lists and calls

  * **ES9 / ES2018**: Object Rest/Spread, Promise finally, Async iteration, 정규표현식, Async functions

  출처: https://velog.io/@zioo/ES6-%EB%AC%B8%EB%B2%95%EC%A0%95%EB%A6%AC

  * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?

    * ES는 ECMAscript의 약자입니다. ECMA는 다양한 개발 언어의 표준 규격과 명세를 정했으며, 그중 하나의 표준이 ECMA-262(스크립팅 프로그래밍 언어의 표준 규격), 즉 ECMA Script 언어 규격이고 이 규격의 구현이 현재의 자바스크립트 버전이 되는 것입니다.

  * 자바스크립트의 표준은 어떻게 제정될까요?
    * ECMA International(European Computer Manufacturers Association International)에 의해 제정됩니다.

    출처 :https://blogpack.tistory.com/601

* 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
  
  * 자바스크립트(JavaScript)는 객체(object) 기반의 스크립트 
  언어입니다.

  * 대부분의 웹 브라우저에는 자바스크립트 인터프리터가 내장되어 있습니다

  * 자바스크립트는 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어입니다. -> 자료형과 변수의 형태를 일치하지 않아도 된다.

  * 자바스크립트는 동기식언어 (한 작업이 실행되는 동안 다른 작업은 멈춘 상태를 유지하고 자신의 차례를 기다리는 것)이다.

  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?

  *  for 문
  *  do...while 문
  *  while 문
  *  레이블 문
  *  break 문
  *  continue 문
  *  for...in 문
  *  for...of 문

출처: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration

* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?

  * `classList` 속성을 통해 추가와 제거를 할 수 있다.

  * 클래스 추가하기(classList.add)
  ```
  // getElementById() 메소드를 사용하여 id가 myElement인 요소를 가져온다.
  const element = document.getElementById("myElement"); 

  // classList 속성을 사용하여 myClass 클래스를 추가한다.
  element.classList.add("myClass");

  ``` 
  * 클래스 제거하기(.classList.remove)
  
  ```
  // getElementById() 메소드를 사용하여 id가 myElement인 요소를 가져온다.
  const element = document.getElementById("myElement"); 

  // classList 속성을 사용하여 myClass 클래스를 제거한다.
  element.classList.remove("myClass");

  ``` 
   * (+) 이 메소드는 이미 클래스가 있거나 제거된 경우에도 예외를 발생시키지 않으므로 클래스 유무를 확인하지 않아도 된다.

  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
    
    * `classList` 속성을 지원하지 않으므로 다른 방법을 간구해야한다.

    *  Polyfill을 이용한다.
    정의: https://developer.mozilla.org/ko/docs/Glossary/Polyfill
    classList 관련 polyfill: https://dev-son.tistory.com/6
    Polyfill.io : https://polyfill.io/v3/url-builder/
    `<script>` 로 불러오는듯 하다.





* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
  
  * 기본적으로 변수가 선언된 위치에 따라 결정된다.(구성요소나 함수 내부등 해당하는 곳에서만 사용가능) 
  변수가 선언된 위치에 따라서 전역 범위(global scope)와 지역 범위(local scope)로 나뉜다.

  * 전역범위 (전역 함수): 함수 바깥에서 선언된 변수로 어디서든지 접근할 수 있다. 모든 함수에서 사용가능하므로 요용하게 되면 코드의 가독성과 유지보수성을 떨어뜨린다.

  * 지역범위 (지역 변수): 함수 안에서 선언된 변수로 해당 함수에서만 접근 할 수 있다. -> 코드의 가독성과 유지보수성을 높일 수 있다.

  * 블록범위 ("{}" 안에서 선언된 변수 ): 해당 블록 내에서만 접근가능, `let`, `const` 키워드를 이용하므로 ES6 이후부터 지원한다. 

  ``` 
  function example() {
  if (true) {
    let a = "I am block"; // 블록 범위 변수
    console.log(a); // "I am block"
  }
  console.log(a); // Uncaught ReferenceError: a is not defined -> 블록범위 밖에 있으므로 a에 접근 할 수 없다.
  }
  example();

  ```
  * `var` 를 사용하는 변수선언은 레거시가 되고있다. -> `const`, `let` 을 활용 

  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
    *  `var`로 변수 선언을 한 경우 변수가 함수 레벨 스코프를 가지기 때문에 같은 변수명으로 여러번 선언해도 에러가 발생하지 않는다. 이는 변수의 값이 의도치 않게 변경되는 원인이 될 수 있다. 
  
  * `let`은 같은 변수명으로 재선언하게되면 syntaxError가 발생한다. -> 새로운값을 대입할 수 있지만(재할당 가능), 재선언은 금지된다.
  
  * `const`는 상수값을 선언 할 때 사용하며, 재할당과 재선언 모두 금지된다.

  * 세 가지 모두 최상위로 호이스팅 할 수 있지만 `var`는 `undefined(정의되지 않음)`으로 초기화 되고 `let`은 초기화 되지 않는다. `const`는 선언중에 초기화 해야하며 또한 초기화 되지 않는다.

  관련링크: https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/#:~:text=let%20%EB%B3%80%EC%88%98%EB%8A%94%20%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%ED%95%A0,%EB%B3%80%EC%88%98%EB%8A%94%20%EC%B4%88%EA%B8%B0%ED%99%94%EB%90%98%EC%A7%80%20%EC%95%8A%EB%8A%94%EB%8B%A4.

* 자바스크립트의 익명 함수는 무엇인가요?
  
  * 자바스크립트에서는 함수가 함수 자체 뿐만아니라 변수나 인자 , 리턴값으로 작용할 수 있다. 
  * 이름이 없는 함수를 말하며  `function` 키워드 다음에 함수의 매개변수와 함수 내부 코드를 작성하여 생성할 수 있습니다.
  * 주로 콜백 함수(callback function)나 즉시 실행 함수(immediately invoked function) 등의 용도로 사용됩니다.

  * **콜백함수** : 다른 함수의 인자로 전달되어 특정이벤트가 발생되었을때 실행되는 함수를 말한다.
  ```
  document.addEventListener('click', function() { // `function()` 이 인자가 됨 
    console.log('Clicked!');
  });

  // 클릭하는 이벤트가 발생할 때 'clicked!' 가 콘솔로 출력된다.    
  ```

  * **즉시 실행 함수** :  함수를 정의한 후 바로 실행하는 함수를 말한다. 
    ```
    (function() {
    console.log('Hello, world!');
  }) ();
    // 함수를 익명으로 작성하여, (); 로 바로 실행한 모습 ,전역 네임스페이스를 오염시키지 않고 필요한 코드 블록을 캡슐화할 수 있다. 
    ```
  * 익명 함수는 함수의 이름을 따로 부여하지 않아도 되므로, 재사용되지 않거나 특정한 용도로만 사용되는 함수를 간단하게 작성할 때 유용합니다.


  관련: https://developer.mozilla.org/ko/docs/Glossary/IIFE
  

  * 자바스크립트의 Arrow function은 무엇일까요?
    * 화살표 함수 표현(arrow function expression)은 전통적인 함수표현(function)의 간편한 대안입니다.
    하지만, 화살표 함수는 몇 가지 제한점이 있고 모든 상황에 사용할 수는 없습니다.

    * this, arguments나 super에 대한 자체 바인딩이 없고, methods로 사용해서는 안됩니다.
    * new.target키워드가 없습니다.
    * 일반적으로 스코프를 지정할 때 사용하는 call, apply, bind methods를 이용할 수 없습니다.
    * 생성자(Constructor)로 사용할 수 없습니다.
    * yield를 화살표 함수 내부에서 사용할 수 없습니다.

    * 예시
    ```
    const materials = [
      'Hydrogen',
      'Helium',
      'Lithium',
      'Beryllium'
    ];

    console.log(materials.map(material => material.length));
    //  Expected output: Array [8, 6, 7, 9]
    ```

    * 관련:https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?

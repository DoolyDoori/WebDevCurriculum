# Quest 02. CSS의 기초와 응용

## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS의 기초 문법과 적용 방법
  * Inline, `<style>`, `<link rel="stylesheet" href="...">`
* CSS 규칙의 우선순위
* 박스 모델과 레이아웃 요소
  * 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  * `position`, `left`, `top`, `display`
  * CSS Flexbox와 Grid
* CSS 표준의 역사
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
  * 1. 내부 스타일 시트 : `<head>` 내부에 `<style>` 태그를 넣어 해당 HTML 문서에만 스타일을 적용하는 방법이다.

  * 2. 외부 스타일 시트 : 별도의 `.css` 파일을 작성하여 `<link>` 태그를 통해 CSS파일을 불러오는 방법입니다. 이 경우에도 `<head>` 내부에 작성합니다.

  * 3. 인라인 스타일: HTML요소에 직접 스타일을 적용하는 방식이며 style 속성을 통해 작성합니다. 일부 요소에만 특정스타일을 적용할 때 사용합니다. 
    (EX) ``` <h1 style="color: aqua;"> 제목입니다! </h1>```  

  * 세 가지 방법 각각의 장단점은 무엇일까요?

    1. 내부 스타일 시트 -  **장점**:  1. HTML 문서 안에 CSS 코드가 포함되어 있기 때문에 파일을 따로 관리할 필요가 없다. / **단점** :해당 HTML 문서에만 적용되기 때문에 다른 HTML 문서에서 재사용이 어렵다.

    2. 외부 스타일 시트 - **장점**: 여러 HTML 문서에서 동일한 스타일을 적용할 수 있기 때문에 코드의 재사용성이 높아진다./**단점**:스타일 시트 파일을 불러오기 때문에 초기 로딩 속도가 느릴 수 있다.

    3. 인라인 스타일 - **장점**:특정 요소에 대한 스타일을 쉽고 빠르게 적용할 수 있다. / **단점**:스타일을 적용하는 요소가 많아지면 코드의 복잡도가 증가한다.

* CSS 규칙의 우선순위는 어떻게 결정될까요?
  * **1순위** : !important;(속성 뒤에 붙음), **2순위**: 인라인 스타일(style요소), **3순위**: id (#id), **4순위** class(.class), **5순위**: 태그 규칙(tag {#}) **6순위**: 상위요소의 스타일 // 번외로 우선순위가 같다면 개수가 많은 쪽을 따른다.

* CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?

  * 웹페이지의 레이아웃을 형성하는 요소들을 각각 박스로 생각하고, 이 박스들의 크기와 간격을 결정하는 모델이다. 각 박스는 콘텐츠영역(content-area), 안쪽여백(padding),테두리(border), 그리고 바깥쪽 여백(Margin)으로 구성됩니다.

  * 박스의 크기는 각 박스의 구성요소의 크기에 따라 결정되며 박스의 너비는 콘텐츠영역의 너비와 왼쪽 오른쪽의 테두리, 안쪽과 바깥쪽 여백을 모두 더한 값이다.

  * 박스의 크기는 CSS 속성을 통해 구성요소의 크기를 조정할 수 있다.
    `width` 와 `height` 를 통해 너비와 높이를 조정할 수 있으며 `padding`, `margin` 속성을 통해 안쪽과 바깥쪽 여백의 크기를, `border`를 통해 테두리의 스타일과 두께 생상을 설정할 수 있다.

* `float` 속성은 왜 좋지 않을까요?

  * `float` 속성은 CSS에서 요소를 왼쪽이나 오른쪽으로 떠 있게 하여 다른 요소들과 떨어뜨리는 레이아웃 속성이다.

  * 단점 1: 떠있는 요소의 부모요소가 높이를 감지하지 못해 레이아웃이 깨질 수 있다. 이를 해결하기 위해 부모요소에 `clear`속성을 적용해야 한다.
  * 단점 2: 요소가 떠 있기 떄문에 다른 요소와 겹치는 문제가 발생한다. 이를 해결하기 위해서는 `position` 속성을 사용해야한다. 
  * 단점 3: 레이아웃을 예측하기 어려워져 디자인작업시에 더 많은 시간이 소요될 수 있다.

  (+)따라서 `flexbox`, `grid` 같은 레이아웃 모델로 대체하는 것이 좋다.

* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
  
  * **Flexbox**는 수평(한 줄) 또는 수직(한 열)의 요소들을 배치하고 정렬하는데 사용되는 **컨테이너**이며 주로 작은크기의 컨테이너에 적용하며 요소들이 단일 행이나 열로 배치되는 경우에 유용하다. 
  
  * **CSS Grid**는 행과 열로 구성된 그리드 안에서 요소들을 배치하고 정렬하는데 사용된다.대규모 레이아웃을 다루는 데 유용합니다. 작은크기의 레이아웃에서는 flexbox에 비해 비효울적입니다.

  
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?

  * box model 관련: width, height, padding, margin, border, box-sizing 등
  -> 요소의 크기와 위치를 조절하는 데 사용
  * Positoion 관련: position, top, bottom, left, right, z-index 등
  -> 요소의 위치와 쌓이는 순서를 조절하는 데 사용
  * Typography 관련: font-family, font-size, font-weight, line-height, color, text-align, text-transform 등
  -> 모두 텍스트의 스타일링을 조절하는 데 사용
  * Layout 관련: display, flex, grid, float, clear, overflow, visibility 등
  -> 모두 요소의 배치와 레이아웃을 조절하는 데 사용
  * Animation 관련: transition, animation, transform, keyframes, perspective, backface-visibility 등
  -> 모두 요소의 애니메이션과 변형을 조절하는 데 사용

   = 각 요소들을 그룹화하여 역할과 기능을 명확하게 파악 할 수 있다.
## Quest
* Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
* **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced
* 왜 CSS는 어려울까요?
* CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
* CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
* 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?

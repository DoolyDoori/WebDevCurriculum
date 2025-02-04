# Quest 14. 정적 분석: 타입스크립트와 린트 시스템

## Introduction
* 이번 퀘스트에서는 타입스크립트와 린트 시스템을 통해 코드에 대한 정적분석의 장점에 대해 알아보겠습니다.

## Topics
* Lint
  * ESLint
* TypeScript

## Resources
* [ESLint](https://eslint.org/)
* [TypeScript](https://www.typescriptlang.org/)

## Checklist
* 코드를 린팅하는 것의 장점은 무엇일까요?

```

코드 린팅(linting)은 프로그래밍에서 코드의 구문(syntax)과 스타일(style)을 자동으로 검사하는 프로세스입니다. 코드 린팅을 하는 것은 다음과 같은 장점이 있습니다:

  - 코드 품질 향상: 코드 린팅은 일관된 스타일을 유지하도록 도와주며, 잠재적인 오류를 사전에 발견하여 코드 품질을 향상시킵니다. 린팅 도구는 일관성 없는 들여쓰기, 잘못된 변수 사용, 불필요한 코드, 오타 등을 감지하여 수정하도록 유도합니다.

  - 버그 예방: 린팅 도구는 코드에서 잠재적인 버그를 찾아내어 미리 예방할 수 있습니다. 예를 들어, 변수 이름의 철자를 잘못 입력하거나, 변수를 초기화하지 않는 등의 실수를 린팅 도구가 감지하여 버그를 예방할 수 있습니다.

  - 생산성 향상: 코드 린팅은 코드 리뷰 과정에서 시간과 노력을 절약할 수 있습니다. 린팅 도구가 코드의 스타일과 구문을 검사하여 개발자가 확인해야 할 부분을 줄여주기 때문입니다.

  - 코드 유지보수 용이성: 일관된 스타일과 구문을 유지하면 코드의 가독성과 유지보수 용이성이 향상됩니다. 또한 린팅 도구는 새로운 개발자가 코드를 쉽게 이해할 수 있도록 도와주며, 코드 수정 시 린팅 도구가 감지한 오류를 수정하면서 코드의 품질을 유지할 수 있습니다.

```
  * 린트 규칙은 어떻게 설정하는 것이 좋을까요? 너무 빡빡한 규칙과 너무 헐거운 규칙 사이에서 어떻게 밸런스를 잡아야 할까요?

  ```
  너무 빡빡한 규칙을 설정하면 개발자가 코드를 작성할 때 불필요한 시간과 노력이 들어가게 되며, 코드 작성에 대한 의욕을 상실할 수도 있습니다. 또한 지나치게 엄격한 규칙은 개발자가 새로운 기술과 도구를 적용하기 어렵게 만들 수 있습니다. 따라서, 린트 규칙은 코드 품질을 향상시키기 위한 일종의 가이드라인으로 사용하는 것이 좋습니다.

  반면에 너무 헐거운 규칙을 설정하면 코드 품질이 나빠질 수 있으며, 버그와 실수를 발생시키는 원인이 될 수 있습니다. 헐거운 규칙은 코드 품질을 향상시키지 않고, 오히려 개발자가 경험적으로 배울 수 있는 기회를 제한할 수 있습니다.

  따라서, 린트 규칙을 설정할 때는 다음과 같은 가이드라인을 고려해야 합니다.

    - 프로젝트의 목적과 코드 품질 기준을 고려하여 적절한 수준의 규칙을 설정합니다.

    - 팀원들과 함께 규칙을 검토하고, 의견을 나누어 적절한 규칙을 설정합니다.

    - 린트 도구의 설정 옵션을 적절히 조정하여 프로젝트의 요구 사항에 맞게 설정합니다.

    - 규칙을 반드시 준수해야 하는 경우와 유연하게 적용할 수 있는 경우를 구분하여 설정합니다.

    - 규칙을 일관되게 적용하도록 개발자들에게 교육하고, 규칙을 준수하도록 유도합니다.

    - 필요한 경우 규칙을 추가하거나 수정하여 프로젝트의 요구 사항에 맞게 최적화합니다.

  ```

* 타입스크립트는 어떤 언어인가요?

```
타입스크립트(TypeScript)는 Microsoft에서 개발한 자바스크립트의 상위 집합 언어입니다. 자바스크립트는 동적 타입 언어로, 타입 체크를 런타임에서 수행합니다. 반면, 타입스크립트는 정적 타입 언어로, 컴파일 시간에 타입 체크를 수행합니다.

타입스크립트는 자바스크립트의 문법을 기반으로 하며, ES6(ECMAScript 2015)를 포함한 최신 자바스크립트의 기능을 지원합니다. 또한, 타입스크립트는 인터페이스, 제네릭, 클래스 등의 객체 지향 프로그래밍 개념과 함께 다양한 기능을 제공하여, 더욱 안정적이고 유지보수하기 쉬운 코드를 작성할 수 있도록 돕습니다.

타입스크립트는 웹 어플리케이션, 데스크톱 어플리케이션, 서버 사이드 어플리케이션 등 다양한 분야에서 사용되고 있으며, 최근에는 리액트(React)와 앵귤러(Angular) 등의 프론트엔드 프레임워크에서도 널리 사용되고 있습니다.

```
  * 타입스크립트를 사용했을 때 얻을 수 있는 장점은 무엇인가요?
  ```
  - 코드 안정성: 타입스크립트는 정적 타입 언어이므로, 컴파일 시점에서 타입 체크를 수행하여 런타임 에러를 방지합니다. 이는 코드 안정성을 향상시키고 버그를 미리 발견할 수 있도록 도와줍니다.

  - 유지보수성: 타입스크립트는 자바스크립트보다 더욱 강력한 객체 지향 프로그래밍 개념을 제공하므로, 객체의 구조와 의도가 명확히 드러납니다. 이는 코드의 가독성과 유지보수성을 높여줍니다.

  - 코드 가이드: 타입스크립트는 코드 가이드를 제공합니다. 이는 코딩 스타일, 네이밍 규칙, 들여쓰기, 코드 레이아웃 등을 포함합니다. 이러한 가이드를 따르면 코드 품질을 향상시키고, 협업하는 개발자들 간의 일관성을 유지할 수 있습니다.

  - IDE 지원: 타입스크립트는 대부분의 인기있는 IDE(Integrated Development Environment)에서 지원되므로, 코드 편집기에서 자동 완성, 타입 힌트, 디버깅 등을 지원합니다. 이는 개발자의 생산성을 높여줍니다.

  - 컴파일러 옵션: 타입스크립트 컴파일러는 다양한 옵션을 제공하여 컴파일 시점에서 코드를 최적화하고, 성능을 향상시킬 수 있습니다. 또한, 코드를 자바스크립트로 변환하여 호환성 문제를 해결할 수 있습니다.

  ```

  * 타입스크립트를 사용하면서 타입이 없는 라이브러리나 프레임워크를 사용해야 할 경우에는 어떻게 해야 할까요?

  ```
  - @types 패키지 사용: @types는 타입스크립트에서 사용하는 타입 정의 파일(typing definition)을 제공하는 패키지입니다. 대부분의 인기있는 자바스크립트 라이브러리나 프레임워크에 대한 @types 패키지가 존재하기 때문에, 이를 활용하여 라이브러리나 프레임워크의 타입 정보를 가져올 수 있습니다. 예를 들어, jQuery를 사용한다면 @types/jquery 패키지를 설치하여 타입 정보를 가져올 수 있습니다.

  - 인터페이스 구현: 타입이 없는 라이브러리나 프레임워크를 사용할 때는, 해당 라이브러리나 프레임워크의 동작 방식을 이해하고, 인터페이스를 구현하는 것이 좋습니다. 이는 타입스크립트의 강력한 객체 지향 프로그래밍 기능을 활용하여, 라이브러리나 프레임워크의 기능을 명확히 이해하고 사용할 수 있도록 도와줍니다.

  - any 타입 사용: any 타입은 모든 타입을 허용하는 타입으로, 사용할 때는 타입 검사를 수행하지 않습니다. 따라서, 타입스크립트에서 타입이 없는 라이브러리나 프레임워크를 사용할 때는 any 타입을 사용하여 일시적으로 타입 검사를 생략할 수 있습니다. 그러나, 이는 코드 안정성을 해치므로, 가능한 한 사용을 자제해야 합니다.

  - 타입 파일 생성: 타입스크립트에서는 직접 타입 파일(typing file)을 작성하여 라이브러리나 프레임워크의 타입 정보를 제공할 수 있습니다. 이는 타입스크립트의 기능을 완전히 활용할 수 있지만, 작성하는 데에는 시간과 노력이 필요합니다.

  ```
  * any 타입을 남용하는 것은 왜 좋지 않을까요?

  ```
  any 타입은 모든 타입을 허용하는 타입으로, 사용할 때는 타입 검사를 수행하지 않습니다. 따라서, any 타입을 남용하면 다음과 같은 문제점들이 발생할 수 있습니다.

  - 코드 안정성 감소: any 타입을 사용하면 타입 검사를 하지 않으므로, 컴파일 시점에 오류를 잡아낼 수 없습니다. 이는 코드 안정성을 감소시키고, 런타임 오류가 발생할 가능성을 높입니다.

  - 가독성 저하: any 타입을 남발하면 코드의 가독성이 저하됩니다. 이는 코드를 유지보수하거나 다른 개발자들과 협업할 때 문제를 야기할 수 있습니다.

  - 타입 추론 제한: any 타입을 사용하면, 타입 추론이 되지 않아 타입스크립트가 제공하는 강력한 타입 추론 기능을 활용할 수 없습니다. 이는 개발자가 타입스크립트의 기능을 충분히 활용하지 못하게 만듭니다.

  any 대신에 unknown이나 union type 등을 사용하면, 코드 안정성을 유지하면서도 타입스크립트의 강력한 타입 검사 기능을 활용할 수 있습니다.

  ```

* 린트와 빌드 등의 과정을 개발 싸이클에서 편하게 수행하려면 어떻게 하는 것이 좋을까요?

```
- 자동화된 도구 사용: 린트와 빌드 등의 과정은 자동화된 도구를 사용하여 자동으로 수행할 수 있습니다. 예를 들어, Webpack, Gulp, Grunt 등의 빌드 도구를 사용하면, 파일 변환, 번들링, 압축 등의 작업을 자동으로 처리할 수 있습니다. 또한, ESLint, TSLint 등의 린트 도구를 사용하면, 코드 스타일 검사, 타입 체크 등의 작업을 자동으로 수행할 수 있습니다.

- CI/CD 파이프라인 구성: CI/CD 파이프라인을 구성하여, 코드 변경 사항을 지속적으로 통합 및 배포할 수 있습니다. 이를 통해, 코드 린팅, 빌드, 테스트, 배포 등의 과정을 자동화하고, 개발자가 수동으로 작업을 수행하지 않아도 됩니다.

- 스크립트 작성: 린트와 빌드 등의 과정을 자동화하려면, 스크립트를 작성하여 실행할 수 있습니다. 이를 통해, 명령어 한 줄로 린트와 빌드 등의 과정을 실행할 수 있습니다. 예를 들어, package.json 파일에 스크립트를 작성하여 npm run 명령어로 실행할 수 있습니다.

- IDE 확장 프로그램 사용: IDE 확장 프로그램을 사용하면, 코드 린팅 등의 작업을 편리하게 수행할 수 있습니다. 예를 들어, Visual Studio Code의 ESLint, TSLint 등의 확장 프로그램을 사용하면, 코드 스타일 검사, 타입 체크 등의 작업을 IDE 내에서 바로 수행할 수 있습니다.

```

## Quest
* 메모장 시스템에 린트 시스템을 적용해 보세요.
* 메모장 시스템을 타입스크립트 기반으로 수정해 보세요.
* `package.json` 파일의 `scripts` 항목을 이용하여 린트와 빌드 등의 작업을 스크립트화 해 보세요.

## Advanced
* 자바스크립트 코드에 대한 정적분석은 어떤 과정을 통해 이루어질까요?
  * 이러한 정적분석을 수행해 주는 핵심 역할을 하는 npm 패키지는 어떤 것이 있을까요?

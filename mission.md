loader : 이미지, 폰트, 스타일시트를 웹팩이 이해하게끔 변경해줌
css-loader를 사용하면 css->js 변경됨. 이 변경된 스타일시트를 돔에 추가해줘야 브라우저가 해석가능, 그게 style-loader
로더 적용 순서는 오른쪽에서 왼쪽순

babel : ES6 -> ES5로 변환해서 모든 브라우저에서 동작하도록 함(트랜스파일)

plugin : 로더가 파일 단위로 처리하는 반면, 플러그인은 번들된 결과물을 처리

minification : 최적화. 주석 등을 코드에서 제거. 표현간결화(변수명 간결,들여쓰기제거,삼항연산자 사용)

Caching : 빌드한 결과물이 변경되지 않았으면 계속 캐싱 상태로 남겨서 별도의 HTTP 요청이 발생하지 않도록 하는 기법

chunk : 파일이 몇개의 형태로 분리되어 있는 형태. 번들링을 통해 하나의 파일로 묶어 관리하면 접근에 용이하나 파일의 크기가 점점 비대해짐

mangling : 표현을 난독화시킨다. 용량을 줄여주고 외부에서 코드 분석을 어렵게 함

- pakage remove 명령어 : npm uninstall <package_name>

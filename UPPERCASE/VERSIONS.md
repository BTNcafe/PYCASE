VERSIONS
========
1.2.9 (WORKING)
- (WORKING) CONNECTING, DISCONNECTED 커스터마이징 기능 추가
- (WORKING) 브라우저 비호환 페이지 커스터마이징 기능 추가
- OTHER_LANGS -> MULTI_LANG_SUPPORT
- 원본 파일 제거 시 __UPPERCASE_COMPILED 파일도 제거

1.2.8 (2014. 2. 21)
- BROWSER_CONFIG에서 function을 완벽하게 passing하도록 개선
- 기본 스타일시트 간소화 및 개선
- 다른 언어 지원(OTHER_LANGS) 설정에서 js 파일도 가능하게 변경
- 다른 언어로 부팅할 시 해당 언어의 소스코드를 js 파일로 컴파일 후 __UPPERCASE_COMPILED 파일로 캐싱

1.2.7 (2014. 2. 18)
- MODEL에 onRemove 추가
- CONFIG isNotUsingDB -> isNotUseDB, isNotNeedDBAuth -> isNotRequireDBAuth, isSupportHD -> isSupportingHD
- BROWSER_CONFIG에 function을 포함할 수 있도록 개선

1.2.6 (2014. 2. 17)
- backgroundSize 추가
- tap event bubbling 버그 개선 
- childs (childDoms) -> children 변경
- js 압축 more

1.2.5 (2014. 2. 16)
- IE8의 IE7 모드에서 hashchange 이벤트가 발생하지 않는 문제 해결
- TH 및 TR에 colspan, rowspan 추가
- touch-callout, user-select 스타일 지원
- ANIMATE opacity 지원
- 다른 언어 지원 (OTHER_LANGS)
- Android/IE INFO.setLang 버그 해결

1.2.4.2 (2014. 2. 13)
- 기본 커넥션 접속 제한 시간 10초에서 5초로 단축
- LOOP 생성시 하나의 func만 넘어오면 interval로 지정

1.2.4 (2014. 2. 13)
- DOM 메모리 누수 해결
- DOM 제거시 Event 실행 중단
- Database API 변경
- 부팅 로그, 사용자 접속 로그 자동저장 기능 제거 (불필요한 부하)
- 데이터베이스를 사용하지 않을 경우 SERVER_CONFIG.isNotUsingDB = true 설정 추가

1.2.3 (2014. 2. 6)
- SOUND isLoop 추가
- SOUND stop 추가
- word-break 버그 제거
- DOM on 추가
- 모바일에서 mouseover/mouseout 지원

1.2.2 (2014. 1. 30)
- 링크 기본 색상을 #fff로 고정
- LAYER 크기 배율 버그 해결
- 안드로이드 2.x 버젼에서 overflow scroll 문제 해결
- 기본 스타일 변경

1.2.1 (2014. 1. 24)
- Android < 3 에서 overflow scroll 버그 해결 솔루션 제작
- MODEL에서 create시 특정 ROOM으로 broadcast하는 기능 제작
- match view에서 box name을 인식하는 버그 해결
- HD 화면에서 IMG load 이벤트가 두번 발생되는 버그 해결, width 두배로 인식되는 문제 해결
- LAYER_SCREEN 크기 배율 설정 기능 제작 
- DELAY 추가

ROAD MAP
--------
1.3 (2014년 후반기 예상)
- 소스코드 재정비
- 소켓, DB 보안 (서버측 인증 처리 -> CHECK_ROLE 추가)
- Socket.IO + Redis 구성 가능
- 분산 서버 구성 (DB, 웹 서버 모두 분산 가능 -> 수평적 확장 가능)
- Redis를 이용한 파일 캐시, 분산 파일 서버
- API화 가능하게 변경

# Create React App

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

- 페이스북의 오픈소스
- 리액트, 리액트 돔 라이브러리와는 별개로 그것들을 편하게 사용할 수 있도록 프로젝트를 생성해준다.
- 개발하면서 필요한 여러 기능들을 제공한다.

```
npx create-react-app tic-tac-toe
```

- `npx` : npm 5.2.0이상부터 함께 설치된 커맨드라인 명령어
  - 현재 최신버전의 라이브러리를 확인하고, 최신하면 새로 받아 그걸 실행해주는 커맨드라인 명령어임

### [Dependency](https://velog.io/@jch9537/Dependency)

![Dependency이미지](./image/project-04-01.png)

React, React-Dom 두 개는 필수로 사용함
실제 프로덕션에서 빌더되게 해주는게 React-script이고 이게 create-react-app 이다.

- `npm start`:

  - react-scripts start
  - Starting the development server ...
  - 소스코드 수정하면 바로 다시 브라우저가 새로고침되며 변경사항 적용

- `npm run build`:

  - react-scripts build
  - Creating an optimized production build ...
  - 최종결과물이 빌드라는 폴더에 놓이게되고 , 빌드라는 폴더를 파일서버로 띄우면 프로덕션용 서버가 실행된다.

- `npm test`:

  - react-scripts test
  - jest 를 통해 test code를 실행합니다.

- `npm run eject`
  - react-scripts eject
  - 크리에이터 리액트 앱안에 들어있던 프로젝트를 밖으로 빼서 여러가지 설정들을 고칠 수 있게된다.

### 개발자들의 협업

`ESLint` 모든 자바스크립트로 이루어진 프로젝트는 ESLint를 사용해서 코딩스타일을 맞출 수 있다.
`Prettier` An opinionated code formatter : 리액트에는 프리티어가 없어서 셋팅을 해준다고 함
`husky` 여기까지 내가 알 필요는 없어보이지만, 커밋 전에 훅을 돌려주는 어떤 것이라 이해됌

위 3가지의 셋팅으로 커밋 전 개발언어들을 아름답게 정돈하는 일을 하는 듯 함

### React Router

여기서부터는 버전 5로 설명을 해주셔서 도움이 별로되지 않음 , 직접 알아봐야함

- [React Router v6](https://remix.run/blog/react-router-v6)
- [ React Router 공식홈페이지](https://reactrouter.com/)

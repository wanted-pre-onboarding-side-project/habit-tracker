# Habit Tracker

## 목차

1. [프로젝트 소개](#1-프로젝트-소개)
2. [기능](#2-기능)
3. [소스 코드](#3-소스-코드)
4. [팀 협업 방식](#4-팀-협업-방식)

<br>

## 1. 프로젝트 소개

![image](https://cdn.discordapp.com/attachments/1016940382061346880/1117450756438642718/main-image.png)

<p align="center">
  <a href="http://habit-tracker-project.s3-website.ap-northeast-2.amazonaws.com/">🔗 배포 URL</a>
</p>

### Habit Tracker Project

- 이 프로젝트는 사용자의 습관을 추적하고 기록 할 수 있는 기능을 가지고 있습니다.

### 진행 방식

- 3명의 팀원들이 각자 과제를 구현하고, 2회의 Pull Request를 보내 코드리뷰를 진행 후 Best Practice를 선정하였습니다.
- Best Practice로 뽑힌 코드 외에 다른 좋은 코드를 반영하기 위해 페어 프로그래밍으로 refactoring을 진행했습니다.

### 진행 기간

- 2023.04.04 ~ 진행중

### 프로젝트 실행 방법

```
$ git clone git@github.com:wanted-pre-onboarding-side-project/habit-tracker.git
$ cd habit-tracker
$ npm install && npm run start
```

<br>

## 2. 기능

### (1) 습관 추가, 수정, 삭제

|                                           습관 추가                                            |
| :--------------------------------------------------------------------------------------------: |
| ![1-1](https://cdn.discordapp.com/attachments/1016940382061346880/1117406983188922448/1-1.gif) |

|                                           습관 수정                                            |
| :--------------------------------------------------------------------------------------------: |
| ![1-2](https://cdn.discordapp.com/attachments/1016940382061346880/1117407016814641242/1-2.gif) |

|                                           습관 삭제                                            |
| :--------------------------------------------------------------------------------------------: |
| ![1-3](https://cdn.discordapp.com/attachments/1016940382061346880/1117407044308316230/1-3.gif) |

- 상단의 '습관 추가하기' 버튼을 누르면 습관을 추가할 수 있는 모달이 뜨고 이름, 상세설명, 루틴을 정할 수 있습니다
- 습관을 추가 시 오늘 이전에 대한 기록 버튼은 나타나지 않습니다 (이미지에서는 일요일에 추가되었음)
- 습관을 수정, 삭제 하기 위해서는 각 습관 이름 옆에 있는 more button(세로로 점 3개)을 클릭하시여 Popover에서 선택할 수 있습니다
- 습관을 수정할 때도 추가하기와 같은 형식의 모달이 뜨며 기존의 정보를 미리 가지고 있습니다
- 습관을 삭제 할 때는 한번 더 확인 할 수 있는 Dialog가 있습니다

<br>

### (2) 습관 기록

|                                           습관 기록                                            |
| :--------------------------------------------------------------------------------------------: |
| ![2-1](https://cdn.discordapp.com/attachments/1016940382061346880/1117407061140058143/2-1.gif) |

- 오늘에 해당하는 습관은 오른쪽 대시보드에 확인 할 수 있으며 완료/취소 버튼을 클릭해 습관을 기록 할 수 있습니다
- 왼쪽 칸에서는 네모 버튼을 클릭하여 습관을 기록 할 수 있습니다

<br>

## 3. 소스 코드

### 사용한 라이브러리

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Dayjs-FF5F4C?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
  <img src="https://img.shields.io/badge/husky-5D4F85?style=for-the-badge&logo=husky&logoColor=white">
</div>
 
<br>

- **React** : 팀원들 모두 가장 익숙한 react 라이브러리를 사용하였습니다.
- **TypeScript** : 타입 선언을 통해 런타임 오류 방지와 코드의 표현력을 올리기 위해 사용하였습니다.
- **Dayjs** :자바스크립트 Date 객체를 선언적으로 조작하고 관리하기 위해 사용하였습니다.
- **eslint** : 팀원간 코드 컨벤션을 통일하기 위해 사용했습니다.
- **prettier** : 팀원간 코드 포맷을 통일하기 위해 사용했습니다.
- **husky** : git hook을 좀 더 편리하게 적용할 수 있도록 사용했습니다.

<br>

### 폴더 구조

```
src/
├── HabitTracker.module.css
├── HabitTracker.tsx
├── components
│   ├── Controller
│   ├── Dashboard
│   │   ├── HabitCard
│   ├── Dialog
│   ├── HabitList
│   ├── Header
│   ├── Modal
│   ├── Popover
│   └── ProgressBar
├── contexts
├── index.tsx
├── lib
│   ├── constant
│   ├── helpers
│   ├── hooks
│   ├── types
│   └── utils
├── react-app-env.d.ts
├── setupDayjs.ts
└── styles
```

- 전체적인 폴더 구조는 [컴포넌트 / 상태관리 / 유틸리티 / 스타일링] 4개의 주요 개발 영역을 기준으로 최상위 폴더에서 나누었습니다.
- contexts 폴더에서는 Context API를 활용하여 React App에서 상태 전달에 관련된 기능들을 모았습니다
- lib 폴더에서는 프로젝트 전체에서 사용하는 유틸리티들 (상수, 타입 정의, react hooks)을 모았습니다
- 컴포넌트와 직접적으로 연결된 hooks, 스타이 정의는 컴포넌트 폴더 안에 위치하도록 하였습니다
- 전체적인 폴더 구조에 대한 생각은 @chadseok님이 작성한 블로그를 토대로 진행하였습니다(https://chadseok.blog/blog/react-folder-structure)

<br>

## 4. 팀 협업 방식

### 1. Discussion을 활용한 주기적인 의견 교환

- github discussion를 통해 프로젝트에서 진행되는 사항에 대한 의견을 제시할 수 있도록 하였습니다
- 프로젝트 진행시 궁금한 점은 QnA 탭에 질문을 올리고 답변을 하도록 하였습니다

### 2. Wiki을 활용한 팀 프로젝트 규칙 문서화

- 진행한 프로젝트의 규칙을 문서화를 위해 github wiki을 활용하여 프로젝트 프로세스 중에 발생하는 상황에 대한 규칙을 정리하였습니다
- 프로젝트르 어떻게 진행할 것인지 세세한 정보들이 기록되어있습니다

### 3. Issue 활용하여 개발 진행

- Issue에 프로젝트에 필요한 필수사항(todo)와 버그에 대한 이슈를 작성하여 지속적인 기능 추가와 버그 수정을 하였습니다

### 4. Pull requests와 코드 리뷰

- 프로젝트 필수 기능을 구현하기 위해 팀원 모두 온전한 기능으 모두 개발 후 PR을 보내고 Best Practice를 뽑는 방식으로 진행하였습니다
- Best Practice를 뽑는 과정에서 서로의 코드에 대한 리뷰를 진행하였습니다

<br>

### 👤 팀 멤버

|                                     김상연                                      |                                석창환                                 |                                이지연                                |
| :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :------------------------------------------------------------------: |
|          [@greyhairChooseLife](https://github.com/greyhairChooseLife)           |               [@chadseok](https://github.com/chadseok)                |                [@jiyeon2](https://github.com/jiyeon2)                |
| <img src="https://avatars.githubusercontent.com/greyhairChooseLife" width="80"> | <img src="https://avatars.githubusercontent.com/chadseok" width="80"> | <img src="https://avatars.githubusercontent.com/jiyeon2" width="80"> |

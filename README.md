# Astro-multi-design-template

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
project-root/
├── docs/                                 # Guide 필요한 경우 셋팅
├── src/
│   ├──common/
│   │   ├── ... (공통 컴포넌트, 유틸리티 등)
│   ├── design1/
│   │   ├── v1/
│   │   │   ├── mobile/
│   │   │   └── desktop/
│   │   ├── v2/
│   │   │   ├── mobile/
│   │   │   └── desktop/
│   │   └── ...
│   ├── design2/
│   │   ├── v1/
│   │   │   ├── mobile/
│   │   │   └── desktop/
│   │   ├── v2/
│   │   │   ├── mobile/
│   │   │   └── desktop/
│   │   └── ...
│   └── design3/
│       ├── v1/
│       │   ├── mobile/
│       │   └── desktop/
│       ├── v2/
│       │   ├── mobile/
│       │   └── desktop/
│       └── ...
└── package.json
```

- `src/`: 각 디자인, 버전, 그리고 모바일/데스크톱 레이아웃의 소스 코드가 포함됩니다.
- `src/common/`: 모든 디자인에서 공통으로 사용되는 컴포넌트와 유틸리티가 포함됩니다.
- `package.json`: 프로젝트의 의존성과 스크립트를 정의합니다.
  <br>
- 버전은 디자인이 전반적으로 달라질 때만 추가 되며, 부분적으로 달라지는 경우는 페이지를 추가하는 것이 좋습니다.
- 때로는 `design1/common` 이 추가될 수도 있습니다.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 추가 빌드 옵션

특정 디자인 또는 버전을 빌드하기 위한 추가 명령어:

| 명령어                  | 설명                       |
| :---------------------- | :------------------------- |
| `npm run build:design1` | design1의 모든 버전 빌드   |
| `npm run build:design2` | design2의 모든 버전 빌드   |
| `npm run build:design3` | design3의 모든 버전 빌드   |
| `npm run build:v1`      | 모든 디자인의 v1 버전 빌드 |
| `npm run build:v2`      | 모든 디자인의 v2 버전 빌드 |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

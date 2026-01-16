# 일본어 학습 앱 🇯🇵

일본어를 배우기 위한 인터랙티브 웹 애플리케이션입니다.

## 기능

- **히라가나 학습**: 일본어 기본 문자인 히라가나를 학습할 수 있습니다
- **가타카나 학습**: 외래어 표기에 사용되는 가타카나를 학습할 수 있습니다
- **단어 학습**: 플래시카드 형식으로 일본어 단어를 학습할 수 있습니다
- **퀴즈**: 학습한 내용을 퀴즈로 확인할 수 있습니다

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 앱을 확인하세요.

### 빌드

```bash
npm run build
```

## 기술 스택

- React 18
- TypeScript
- Vite
- React Router

## 프로젝트 구조

```
일본어학습/
├── src/
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   ├── Hiragana.tsx
│   │   ├── Katakana.tsx
│   │   ├── Vocabulary.tsx
│   │   └── Quiz.tsx
│   ├── data/           # 데이터 파일
│   │   └── japaneseData.ts
│   ├── App.tsx         # 메인 앱 컴포넌트
│   ├── main.tsx        # 진입점
│   └── index.css       # 전역 스타일
├── index.html
├── package.json
└── vite.config.ts
```

## 사용 방법

1. **히라가나/가타카나 학습**: 각 문자를 클릭하면 상세 정보를 볼 수 있습니다
2. **단어 학습**: 플래시카드를 클릭하여 앞면/뒷면을 전환할 수 있습니다
3. **퀴즈**: 원하는 퀴즈 유형을 선택하고 문제를 풀어보세요

## 라이선스

MIT

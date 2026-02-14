# 3D Image Carousel

마우스 휠로 회전하는 3D 이미지 캐러셀입니다.

## 📁 프로젝트 구조

```
your-repo/
│
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 로직
├── images/             # 이미지 폴더
│   ├── image1.jpg
│   ├── image2.jpg
│   ├── image3.jpg
│   ├── image4.jpg
│   ├── image5.jpg
│   ├── image6.jpg
│   ├── image7.jpg
│   └── image8.jpg
└── README.md
```

## 🚀 설치 방법

1. GitHub 레포지토리 생성
2. 파일들을 레포지토리에 업로드
3. `images` 폴더 생성 후 이미지 8개 업로드
4. GitHub Pages 활성화 (Settings > Pages > Branch: main)

## 📸 이미지 준비하기

### 권장 이미지 사양:
- **비율**: 세로형 (3:4 비율 권장, 예: 600x800px)
- **포맷**: JPG, PNG
- **파일명**: `image1.jpg`, `image2.jpg`, ..., `image8.jpg`
- **크기**: 1MB 이하 (로딩 속도 최적화)

### 이미지 추가 방법:

#### 방법 1: GitHub 웹 인터페이스
1. 레포지토리에서 `Add file` > `Create new file` 클릭
2. 파일명에 `images/image1.jpg` 입력
3. `Choose your files` 클릭하여 이미지 업로드
4. `Commit new file` 클릭
5. image2.jpg ~ image8.jpg도 같은 방식으로 업로드

#### 방법 2: Git 명령어
```bash
# 로컬에 레포지토리 클론
git clone https://github.com/your-username/your-repo.git
cd your-repo

# images 폴더 생성
mkdir images

# 이미지 파일들을 images 폴더에 복사
cp /path/to/your/images/*.jpg images/

# Git에 추가 및 커밋
git add .
git commit -m "Add carousel images"
git push origin main
```

## 🎮 사용법

- **마우스 휠**: 위/아래로 스크롤하여 회전
- **화살표 키**: 좌우 화살표로 회전 (추가 기능)
- **터치**: 모바일에서 좌우 스와이프 (추가 기능)

## 🔧 커스터마이징

### 이미지 개수 변경
`index.html`에서 `carousel__cell` div 개수를 조정하세요.

### 회전 속도 조절
`style.css`의 `.carousel` transition 값 수정:
```css
transition: transform 0.6s ease-out; /* 0.6s를 원하는 값으로 변경 */
```

### 원의 크기 조절
`script.js`의 radius 계산 수식 수정 또는 perspective 값 조절

## 🐛 문제 해결

### 이미지가 표시되지 않는 경우:
1. 이미지 파일명이 정확한지 확인 (`image1.jpg`, `image2.jpg`, ...)
2. `images/` 폴더가 루트 디렉토리에 있는지 확인
3. 브라우저 개발자 도구(F12) Console 탭에서 에러 확인
4. 이미지 경로가 대소문자까지 정확한지 확인 (특히 Linux 환경)

### GitHub Pages에서 작동하지 않는 경우:
1. Settings > Pages에서 Source가 올바른 브랜치로 설정되었는지 확인
2. 파일명이 `index.html`인지 확인 (대소문자 구분)
3. 5-10분 정도 기다린 후 다시 시도

## 📝 라이선스

MIT License - 자유롭게 사용하세요!

## 🎨 데모

GitHub Pages URL: `https://your-username.github.io/your-repo/`

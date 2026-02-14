# 아이콘 변경 가이드 🎨

## 📍 아이콘을 바꾸는 방법

`index.html` 파일에서 독(Dock) 섹션을 찾아 `<img src="...">`의 URL을 원하는 아이콘 URL로 변경하세요.

### 예시:
```html
<div class="dock-item" data-modal="modal1" data-title="Gallery">
    <img src="여기에_새로운_아이콘_URL" alt="Gallery">
</div>
```

## 🔗 추천 무료 아이콘 사이트

1. **Flaticon** (현재 사용중)
   - https://www.flaticon.com/
   - PNG 형식, 무료 다운로드 가능
   - 사용법: 아이콘 클릭 → "Download PNG" → 512px 선택 → 다운로드

2. **Icons8**
   - https://icons8.com/
   - 다양한 스타일

3. **Font Awesome**
   - https://fontawesome.com/

## 📁 로컬 아이콘 사용하기

1. `icons/` 폴더 생성
2. 아이콘 이미지 파일들을 해당 폴더에 저장
3. index.html에서 경로 변경:

```html
<img src="./icons/gallery.png" alt="Gallery">
<img src="./icons/photos.png" alt="Photos">
<img src="./icons/instagram.png" alt="Instagram">
```

## 🎯 현재 사용중인 아이콘 목록

1. Gallery - 갤러리 아이콘
2. Photos - 사진 아이콘
3. Instagram - 인스타그램 아이콘
4. LinkedIn - 링크드인 아이콘
5. Mail - 메일 아이콘
6. Calendar - 캘린더 아이콘
7. Telegram - 텔레그램 아이콘
8. Contact - 연락처 아이콘

## ⚙️ 아이콘 크기 조정

`style.css` 파일에서 `.dock-item` 크기를 변경:

```css
.dock-item {
    width: 50px;  /* 원하는 크기로 변경 */
    height: 50px; /* 원하는 크기로 변경 */
}
```

## 💡 팁

- 512x512px 또는 1024x1024px PNG 이미지 권장
- 투명 배경 PNG 파일이 가장 좋음
- 모든 아이콘의 스타일을 통일하면 더 깔끔함

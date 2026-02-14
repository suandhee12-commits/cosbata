const carousel = document.querySelector('.carousel');
const cells = carousel.querySelectorAll('.carousel__cell');
const cellCount = cells.length;

// 각도 및 반지름 계산
const theta = 360 / cellCount; // 각 이미지 사이의 각도
const radius = Math.round((280 / 2) / Math.tan(Math.PI / cellCount)) * 1.8; // 반지름을 1.8배로 증가

let selectedIndex = 0;
let isRotating = false;

// 초기 배치
function rotateCarousel() {
    cells.forEach((cell, i) => {
        const cellAngle = theta * i;
        cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
    });
    
    // 초기 회전 설정
    updateCarouselRotation();
}

// 캐러셀 회전 업데이트
function updateCarouselRotation() {
    const angle = theta * selectedIndex * -1;
    carousel.style.transform = `rotateX(10deg) translateZ(-${radius}px) rotateY(${angle}deg)`;
}

// 휠 이벤트로 회전 제어 (debounce 적용)
let wheelTimeout;
window.addEventListener('wheel', (event) => {
    event.preventDefault();
    
    if (isRotating) return;
    
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        isRotating = false;
    }, 100);
    
    isRotating = true;
    
    if (event.deltaY > 0) {
        selectedIndex++;
    } else {
        selectedIndex--;
    }
    
    updateCarouselRotation();
}, { passive: false });

// 키보드 화살표 키로도 제어 가능
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        selectedIndex++;
        updateCarouselRotation();
    } else if (event.key === 'ArrowLeft') {
        selectedIndex--;
        updateCarouselRotation();
    }
});

// 터치 이벤트 (모바일 지원)
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

carousel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        selectedIndex++;
        updateCarouselRotation();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        selectedIndex--;
        updateCarouselRotation();
    }
}

// 이미지 로딩 에러 처리
cells.forEach(cell => {
    const img = cell.querySelector('img');
    img.addEventListener('error', function() {
        console.error(`이미지 로딩 실패: ${this.src}`);
        // 대체 이미지 또는 플레이스홀더 표시
        this.style.backgroundColor = '#f0f0f0';
        this.alt = '이미지를 불러올 수 없습니다';
    });
});

// 초기화
rotateCarousel();

console.log(`캐러셀 초기화 완료 - 이미지 ${cellCount}개, 반지름 ${radius}px`);

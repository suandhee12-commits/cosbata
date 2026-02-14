const carousel = document.querySelector('.carousel');
const cells = carousel.querySelectorAll('.carousel__cell');
const cellCount = cells.length;

// 각도 및 반지름 계산
const theta = 360 / cellCount;
const radius = Math.round((280 / 2) / Math.tan(Math.PI / cellCount)) * 1.8;

let selectedIndex = 0;
let isRotating = false;
let autoRotateInterval;
let isHovering = false;

// 각 이미지마다 연결할 페이지 URL 설정
const pageLinks = [
    'page1.html',  // image1.jpg 클릭시 이동할 페이지
    'page2.html',  // image2.jpg 클릭시 이동할 페이지
    'page3.html',  // image3.jpg 클릭시 이동할 페이지
    'page4.html',  // image4.jpg 클릭시 이동할 페이지
    'page5.html',  // image5.jpg 클릭시 이동할 페이지
    'page6.html',  // image6.jpg 클릭시 이동할 페이지
    'page7.html',  // image7.jpg 클릭시 이동할 페이지
    'page8.html'   // image8.jpg 클릭시 이동할 페이지
];

// 초기 배치
function rotateCarousel() {
    cells.forEach((cell, i) => {
        const cellAngle = theta * i;
        cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
        
        // 클릭 이벤트 추가
        cell.addEventListener('click', () => {
            window.location.href = pageLinks[i];
        });
    });
    
    updateCarouselRotation();
}

// 캐러셀 회전 업데이트
function updateCarouselRotation() {
    const angle = theta * selectedIndex * -1;
    carousel.style.transform = `rotateX(-10deg) translateZ(-${radius}px) rotateY(${angle}deg)`;
}

// 자동 회전 시작
function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        if (!isHovering) {
            selectedIndex += 0.01; // 매우 천천히 회전
            updateCarouselRotation();
        }
    }, 50);
}

// 마우스 호버시 회전 멈춤
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        isHovering = true;
    });
    
    cell.addEventListener('mouseleave', () => {
        isHovering = false;
    });
});

// 마우스 드래그로 회전
let isDragging = false;
let startX = 0;
let currentX = 0;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    carousel.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    const diff = currentX - startX;
    selectedIndex -= diff * 0.01;
    startX = currentX;
    updateCarouselRotation();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

// 휠 이벤트로 회전 제어
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
        this.style.backgroundColor = '#f0f0f0';
        this.alt = '이미지를 불러올 수 없습니다';
    });
});

// 초기화
rotateCarousel();
startAutoRotate(); // 자동 회전 시작

console.log(`캐러셀 초기화 완료 - 이미지 ${cellCount}개, 반지름 ${radius}px`);

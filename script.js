const carousel = document.querySelector('.carousel');
const cells = carousel.querySelectorAll('.carousel__cell');
const cellCount = cells.length;
const theta = 360 / cellCount; // 각 이미지 사이의 각도
const radius = Math.round((150) / Math.tan(Math.PI / cellCount)); // 반지름 계산

let selectedIndex = 0;

// 초기 배치
function rotateCarousel() {
    cells.forEach((cell, i) => {
        const cellAngle = theta * i;
        cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius * 2}px)`; 
        // radius에 곱하는 숫자를 조절해 원의 크기를 키울 수 있습니다.
    });
}

// 휠 이벤트로 회전 제어
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        selectedIndex++;
    } else {
        selectedIndex--;
    }
    const angle = theta * selectedIndex * -1;
    carousel.style.transform = `translateZ(-${radius * 2}px) rotateY(${angle}deg)`;
});

rotateCarousel();

function setupCarousel() {
    const carousel = document.querySelector('.carousel');
    const cells = carousel.querySelectorAll('.carousel__cell');
    const cellCount = cells.length;

    if (cellCount === 0) return;

    const theta = 360 / cellCount;
    const cellWidth = carousel.offsetWidth;
    
    // 이미지 개수가 적을 때와 많을 때를 대비해 반지름 자동 계산
    // 이미지가 너무 가깝다면 1.5 숫자를 2.0으로 키워보세요.
    const radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount)) * 1.5;

    let selectedIndex = 0;

    // 각 셀의 위치를 원형으로 배치
    cells.forEach((cell, i) => {
        const cellAngle = theta * i;
        cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
    });

    // 회전 업데이트 함수
    function updateRotation() {
        const angle = theta * selectedIndex * -1;
        carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
    }

    // 마우스 휠 이벤트 전용
    window.addEventListener('wheel', (e) => {
        // e.preventDefault(); // 필요 시 페이지 스크롤 방지
        if (e.deltaY > 0) {
            selectedIndex++;
        } else {
            selectedIndex--;
        }
        updateRotation();
    }, { passive: true });

    // 초기 위치 실행
    updateRotation();
}

// 모든 이미지가 로드된 후 실행 (중요!)
window.onload = setupCarousel;

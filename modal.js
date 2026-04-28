// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: '포스터 디자인입니다.',
    image: 'img/p1.jpg',
    description: '펫페어 전시회를 개최하는 포스터입니다'
  },
  project2: {
    title: '리플릿 디자인입니다.',
   image: 'img/p2.jpg',
    description: '책이 사람을 만들고 사람이 책을 만드는 주제의 리플릿디자인입니다'
  },
  project3: {
    title: '로고 디자인입니다.'
    image: 'img/p3.jpg',
    description: '네이밍과 로고 디자인을 통합한 브랜딩 프로젝트입니다.'
  },
  project4: {
    title: '상세페이지 디자인입니다.'
    image: 'img/p4.jpg',
    description: 'DIY JUNGLE의 상세페이지입니다.'
  },
  project5: {
    title: '상세페이지 디자인입니다'
    image: 'img/p5.jpg',
    description: '원목가구 브랜드의 상세페이지입니다.'
  },
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
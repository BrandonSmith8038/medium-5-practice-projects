//=======================
//Video Model
//=======================

const videoButton = document.querySelector('.play-icon');
const videoModal = document.querySelector('.video-modal');

videoButton.addEventListener('click', () => {
  videoModal.style.display = 'block';
});

function clickOutside(e) {
  if (e.target == videoModal) {
    videoModal.style.display = 'none';
  }
}

//Listen for outside click
window.addEventListener('click', clickOutside);

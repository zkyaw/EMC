const iconStudent = document.querySelector('.icon-student');
const iconAdults = document.querySelector('.icon-adults');
const iconOrg = document.querySelector('.icon-org');
const iconOther = document.querySelector('.icon-other');

const popupStudent = document.getElementById('popup-student');
const popupAdults = document.getElementById('popup-adults');
const popupOrg = document.getElementById('popup-org');
const popupOther = document.getElementById('popup-other');

// Helper to close all popups
function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('show'));
}

iconStudent.addEventListener('click', () => {
  closeAllPopups();
  popupStudent.classList.add('show');
});

iconAdults.addEventListener('click', () => {
  closeAllPopups();
  popupAdults.classList.add('show');
});

iconOrg.addEventListener('click', () => {
  closeAllPopups();
  popupOrg.classList.add('show');
});

iconOther.addEventListener('click', () => {
  closeAllPopups();
  popupOther.classList.add('show');
});

// Close popups when clicking on the outside
window.addEventListener('click', (e) => {
  document.querySelectorAll('.popup').forEach(popup => {
    if (popup.classList.contains('show') && !popup.contains(e.target) && !e.target.classList.contains('icon')) {
      popup.classList.remove('show');
    }
  });
});

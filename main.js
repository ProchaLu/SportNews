const btnOpen = document.querySelector('.hamburger-btn');
const btnClose = document.querySelector('.close-btn');
const navBar = document.getElementById('nav-bar');

btnOpen.addEventListener('click', function () {
  if (btnOpen.className !== '') {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
    navBar.classList.add('show-nav');
  }
});

btnClose.addEventListener('click', function () {
  if (btnClose.className !== '') {
    this.style.display = 'none';
    btnOpen.style.display = 'block';
    navBar.classList.remove('show-nav');
  }
});

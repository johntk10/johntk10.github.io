function scrollToPosition(position) {
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}

let lastScrollTop = 0;
const header = document.getElementById('header');

function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.opacity = '0.5';
  } else {
    header.style.opacity = '0.8';
  }

  lastScrollTop = scrollTop;
}

window.addEventListener('scroll', () => {
  handleScroll();
});


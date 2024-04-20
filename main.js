document.addEventListener('DOMContentLoaded', function() {
  const userCountElement = document.getElementById('userCount');
  let count = parseInt(localStorage.getItem('userCount'));

  if (isNaN(count)) {
    count = 2000;
  }

  setInterval(() => {
    count += 10;
    userCountElement.textContent = count.toLocaleString();
    localStorage.setItem('userCount', count);
  }, 3600000);

  userCountElement.textContent = count.toLocaleString();
});

window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const userCountElement = document.getElementById('userCount');
  let count = parseInt(localStorage.getItem('userCount'));

  if (isNaN(count)) {
    count = 2000;
  }

  function updateCount() {
    count += 10;
    userCountElement.textContent = formatNumber(count);
    localStorage.setItem('userCount', count);
  }

  updateCount();
  setInterval(updateCount, 3600000);
});

function formatNumber(number) {
  const formatter = new Intl.NumberFormat();
  return formatter.format(number);
}

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
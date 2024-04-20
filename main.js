document.addEventListener('DOMContentLoaded', function() {
  const userCountElement = document.getElementById('userCount');
  let count = parseInt(localStorage.getItem('userCount'));

  if (isNaN(count)) {
    count = 2000;
  }

  let lastUpdateTime = localStorage.getItem('lastUpdateTime');
  if (!lastUpdateTime) {
    updateCount();
  } else {
    lastUpdateTime = new Date(parseInt(lastUpdateTime));
    const currentTime = new Date();
    const diffInHours = Math.abs(currentTime - lastUpdateTime) / 36e5; // Convert milliseconds to hours
    if (diffInHours >= 1) {
      updateCount();
    } else {
      userCountElement.textContent = formatNumber(count);
    }
  }
});

function updateCount() {
  const userCountElement = document.getElementById('userCount');
  let count = parseInt(localStorage.getItem('userCount'));

  if (isNaN(count)) {
    count = 2000;
  }

  count += 10;
  userCountElement.textContent = formatNumber(count);
  localStorage.setItem('userCount', count);
  localStorage.setItem('lastUpdateTime', Date.now());
}

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
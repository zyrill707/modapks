function trackPageView() {
  gtag('config', 'G-9VH7RW3Y1X');
}

window.addEventListener('load', function() {
  trackPageView();
  fetchUserCount();
});

function fetchUserCount() {
  const totalUserCount = 9000; // Placeholder for actual user count
  updateUserCount(totalUserCount);
}

function updateUserCount(newCount) {
  const userCountElement = document.getElementById('userCount');
  const currentCount = parseInt(userCountElement.textContent);
  animateCountChange(userCountElement, currentCount, newCount);
  userCountElement.textContent = newCount;
}

function animateCountChange(element, currentCount, newCount) {
  const diff = newCount - currentCount;
  const duration = 1000;
  const fps = 60;
  const increment = diff / (duration / (1000 / fps));
  let count = currentCount;
  const interval = setInterval(() => {
    count += increment;
    if ((increment > 0 && count >= newCount) || (increment < 0 && count <= newCount)) {
      clearInterval(interval);
      count = newCount;
    }
    element.textContent = Math.round(count);
  }, 1000 / fps);
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
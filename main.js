function trackPageView() {
  // Replace 'G-9VH7RW3Y1X' with your actual Measurement ID
  gtag('config', 'G-9VH7RW3Y1X');
}

window.addEventListener('load', function() {
  trackPageView();
  updateUserCountWithAnimation(0, 9000); // Start the animation from 0 to 9000
});

function updateUserCountWithAnimation(startCount, endCount) {
  const userCountElement = document.getElementById('userCount');
  let count = startCount;
  const fps = 60;
  const duration = 2000; // Animation duration in milliseconds
  const increment = (endCount - startCount) / (duration / (1000 / fps));

  const interval = setInterval(() => {
    count += increment;
    if (count >= endCount) {
      clearInterval(interval);
      count = endCount;
    }
    userCountElement.textContent = Math.round(count);
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
let userCount = 2000; // Starting user count
let increment = 10; // Increment value
let formattedCount = formatNumber(userCount);

function trackPageView() {
  // Replace 'G-9VH7RW3Y1X' with your actual Measurement ID
  gtag('config', 'G-9VH7RW3Y1X');
}

window.addEventListener('load', function() {
  trackPageView();
  updateUserCountWithAnimation(0, userCount); // Start the animation from 0 to starting count
  setInterval(increaseUserCount, 3600000); // Increase user count every hour (3600000 milliseconds)
});

function increaseUserCount() {
  userCount += increment;
  formattedCount = formatNumber(userCount);
  updateUserCountWithAnimation(userCount - increment, userCount);
}

function updateUserCountWithAnimation(startCount, endCount) {
  const userCountElement = document.getElementById('userCount');
  let count = startCount;
  const fps = 60;
  const duration = 2000; // Animation duration in milliseconds
  const incrementValue = (endCount - startCount) / (duration / (1000 / fps));

  const interval = setInterval(() => {
    count += incrementValue;
    if (count >= endCount) {
      clearInterval(interval);
      count = endCount;
    }
    userCountElement.textContent = Math.round(count);
  }, 1000 / fps);
}

function formatNumber(number) {
  const symbols = ['', 'K', 'M', 'B', 'T'];
  let tier = Math.log10(number) / 3 | 0;
  if (tier == 0) return number;
  const suffix = symbols[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;
  return scaled.toFixed(1) + suffix;
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
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
      animateCountChange(userCountElement, 0, count);
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
  animateCountChange(userCountElement, parseInt(userCountElement.textContent), count);
  localStorage.setItem('userCount', count);
  localStorage.setItem('lastUpdateTime', Date.now());
}

function formatNumber(number) {
  const formatter = new Intl.NumberFormat();
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + ' million';
  } else if (number >= 1000) {
    return formatter.format(number);
  } else {
    return number;
  }
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
    element.textContent = formatNumber(Math.round(count));
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
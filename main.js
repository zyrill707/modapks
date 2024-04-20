window.addEventListener('load', function() {
  updateUserCountWithAnimation(2000);
});

function updateUserCountWithAnimation(startCount) {
  const userCountElement = document.getElementById('userCount');
  let count = startCount;
  const fps = 60;
  const duration = 3600000; // 1 hour in milliseconds
  const incrementValue = 10;

  const interval = setInterval(() => {
    count += incrementValue;
    userCountElement.textContent = count.toLocaleString(); // Format the count
    console.log('Animating user count:', count.toLocaleString());
  }, duration / (duration / (1000 / fps)));
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
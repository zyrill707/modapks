function trackPageView() {
  // Replace '437366929' with your actual GA4 property ID
  gtag('config', '437366929');
}

window.addEventListener('load', function() {
  trackPageView();
  fetchUserCount();
});

function fetchUserCount() {
  const apiKey = 'AIzaSyCe4HANgap82vKAEgsRxePcCGGCVihDyvo'; // Your API key
  const propertyID = '437366929'; // Replace with your actual GA4 property ID
  const endDate = new Date().toISOString().split('T')[0]; // Today's date
  const startDate = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0]; // 7 days ago

  const apiUrl = `https://analyticsdata.googleapis.com/v1alpha/properties/${propertyID}:runReport?key=${apiKey}`;
  const requestData = {
    "entity": {
      "propertyId": propertyID,
    },
    "dateRanges": [
      {
        "startDate": startDate,
        "endDate": endDate,
      }
    ],
    "dimensions": [
      {
        "name": "date",
      }
    ],
    "metrics": [
      {
        "name": "activeUsers",
      }
    ]
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
  .then(response => response.json())
  .then(data => {
    const totalUserCount = data.rows[0].metrics[0].values[0];
    updateUserCount(totalUserCount);
  })
  .catch(error => {
    console.error('Error fetching user count:', error);
  });
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
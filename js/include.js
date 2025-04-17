// Header
fetch('/partials/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Sidebar
fetch('/partials/sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  });

// Footer
fetch('/partials/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
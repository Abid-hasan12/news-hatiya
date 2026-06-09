// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('hidden');
  });

  // Close menu when a category is clicked (optional UX improvement)
  const menuItems = menu.querySelectorAll('li');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menu.classList.add('hidden');
    });
  });
});

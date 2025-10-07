// Toggle class on header when the mobile menu checkbox changes
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('menu-toggle');
  var header = document.querySelector('header');
  if (!checkbox || !header) return;

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) header.classList.add('menu-open');
    else header.classList.remove('menu-open');
  });

  // Close menu when clicking any nav link (mobile)
  document.querySelectorAll('header .nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      checkbox.checked = false;
      header.classList.remove('menu-open');
    });
  });
});

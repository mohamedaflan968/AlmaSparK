window.addEventListener('scroll', function () {
  const scrollImage = document.getElementById('scrollImage');
  scrollImage.style.top = window.scrollY + 100 + 'px';
});

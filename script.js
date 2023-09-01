window.addEventListener('scroll', function() {
  var elementsToHide = document.querySelectorAll('.hide-on-scroll');
  var scrollPosition = window.scrollY;

  elementsToHide.forEach(function(element) {
    var elementPosition = element.getBoundingClientRect().top + scrollPosition;

    if (elementPosition < window.innerHeight) {
      element.classList.add('hidden');
    }
  });
});


<script>
  function scrollToSection(sectionId) {
    const section = document.querySelector(`.${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>




----------------------------------------------




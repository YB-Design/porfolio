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

// language-switcher.js

function setLanguage(language) {
    // Define a variable to hold the base URL of your website
    var baseUrl = "https://yb-design.github.io/porfolio/";

    // Set the language by updating the "href" attribute of the language switcher link
    if (language === "en") {
        document.getElementById("language-switcher").getElementsByTagName("a")[0].href = baseUrl + "index.html";
    } else if (language === "fr") {
        document.getElementById("language-switcher").getElementsByTagName("a")[0].href = baseUrl + "indexfr.html";
    }
}




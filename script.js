window.addEventListener('scroll', function () {
  var elementsToHide = document.querySelectorAll('.hide-on-scroll');
  var scrollPosition = window.scrollY;

  elementsToHide.forEach(function (element) {
    var elementPosition = element.getBoundingClientRect().top + scrollPosition;

    if (elementPosition < window.innerHeight) {
      element.classList.add('hidden');
    }
  });
});

function scrollToSection(sectionId) {
  const section = document.querySelector(`.${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

let languages = {
  en: {
    title: "YB DESIGN PORTFOLIO"
  },
  fr: {
    title: "PORTFOLIO YB DESIGN"
  }
};

// Function to change the language
function changeLanguage(language) {
  console.log("Changing language to:", language); // Debugging line
  let languageSet = languages[language];
  if (languageSet) {
    Object.keys(languageSet).forEach((id) => {
      let element = document.getElementById(id);
      if (element) {
        element.innerText = languageSet[id];
      }
    });
  }
}

// Add event listeners to language switch links
document.addEventListener("DOMContentLoaded", () => {
  let storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    changeLanguage(storedLanguage);
  } else {
    // Set a default language here if needed
    changeLanguage("en"); // Default to English
  }

  document.querySelectorAll("[data-change-language]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      let language = element.getAttribute("data-change-language");
      localStorage.setItem("language", language);
      changeLanguage(language);
    });
  });
});

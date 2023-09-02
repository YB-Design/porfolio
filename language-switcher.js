let languages = {
    en: {
        title: "YB DESIGN PORTFOLIO"
    },
    fr: {
        title: "PORTFOLIO YB DESIGN"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
        changeLanguage(storedLanguage);
    } else {
        // Set a default language here if needed
        changeLanguage("en"); // Default to English
    }
    [...document.querySelectorAll("[data-change-language]")].forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            let language = element.getAttribute("data-change-language");
            localStorage.setItem("language", language);
            changeLanguage(language);
        });
    });
});

function changeLanguage(language) {
    console.log("Changing language to:", language); // Debugging line
    let languageSet = languages[language];
    if (languageSet) {
        Object.keys(languageSet).forEach((id) => {
            console.log("Changing element with ID:", id); // Debugging line
            document.getElementById(id).innerText = languageSet[id];
        });
    }
}
element.addEventListener("click", (event) => {
    event.preventDefault();
    let language = element.getAttribute("data-change-language");
    localStorage.setItem("language", language);
    changeLanguage(language);
    console.log("Language changed to:", language);
});

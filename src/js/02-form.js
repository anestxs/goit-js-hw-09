const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const parsedLocalStorageKey = JSON.parse(localStorage.getItem((localStorageKey)));

if (parsedLocalStorageKey) { 
    form.elements.email.value = parsedLocalStorageKey.email;
    form.elements.message.value = parsedLocalStorageKey.message;
}

form.addEventListener("input", () => { 
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => { 
        formObject[key.trim()] = value.trim();
        localStorage.setItem(localStorageKey, JSON.stringify(formObject))
    })
    
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(localStorageKey)));   

    localStorage.clear;
})

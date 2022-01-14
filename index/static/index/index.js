document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#nav-ham").addEventListener("click", () => {
        document.querySelector("#sidebar").style.width = "250px";
    })
    document.querySelector("#close-sidebar").addEventListener('click', () => {
        document.querySelector("#sidebar").style.width = "0px";
    })
    document.querySelector("#create-blank-form").addEventListener("click", () => {
        const csrf = Cookies.get('csrftoken');
        fetch('/form/create', {
            method: "POST",
            headers: {'X-CSRFToken': csrf},
            body: JSON.stringify({
                title: "Input Titles"
            })
        })
        .then(response => response.json())
        .then(result => {
            window.location = `/form/${result.code}/edit`
        })
    })
    document.querySelector("#create-contact-form").addEventListener("click", () => {
        const csrf = Cookies.get('csrftoken');
        fetch('/form/create/contact', {
            method: "POST",
            headers: {'X-CSRFToken': csrf},
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then(result => {
            window.location = `/form/${result.code}/edit`
        })
    })
    
})
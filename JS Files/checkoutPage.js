// Linking Pages=>

let goTOHome = document.getElementById("bestBLogo")
goTOHome.style.cursor = "pointer"
goTOHome.addEventListener("click", () => {
    window.location.href = "HomePage.html"
})

let signUpPage = document.getElementById("signUp");

signUpPage.addEventListener("click", () => {
    window.location.href = "SignUp.html"
});

let returnToHome = document.getElementById("return");
returnToHome.addEventListener("click", () => {
    window.location.href = "HomePage.html"
})

let goHome = document.getElementById("logo");
goHome.addEventListener('click', () => {
    window.location.href = "HomePage.html"
})
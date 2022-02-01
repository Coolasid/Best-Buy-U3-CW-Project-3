let backBtn = document.getElementById("toProduct");
backBtn.addEventListener("click", emptyCart);
let cart = JSON.parse(localStorage.getItem("cartProducts"));


function emptyCart() {
    cart = [];
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    window.location.href = "../index.html"
}
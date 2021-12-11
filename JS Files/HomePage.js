// menuBox=>

let hamb = document.getElementById("menuDiv")
hamb.addEventListener("click",showMenuBox);

var c = 0;
function showMenuBox(){
    // alert()
   

    let menuBox = document.getElementById("menuBox");

    if(c % 2 == 0){
        menuBox.style.display = "block";
    }
    
    if(c % 2 == 1){
        menuBox.style.display = "none";
    }
    c++;
    
}
// menuBox=>

let hamb = document.getElementById("menuDiv")
hamb.addEventListener("click",showMenuBox);

var c = 0;
function showMenuBox(){
    // alert()
   

    let menuBox = document.getElementById("menuBox");

    if(c % 2 == 0){
        menuBox.style.display = "block";
        let close = document.getElementById("change")

        close.textContent = "close";
        close.style.transition = "1s linear"
    }
    
    if(c % 2 == 1){
        menuBox.style.display = "none";
        

        let close = document.getElementById("change")

        close.textContent = "menu";
        close.style.transition = "1s linear"
    
    }
    c++;
    
}

// searchRes=>
    

// holidayPoP=>

let holiday = document.getElementById("holiday")
holiday.addEventListener("click", showHolidayBox);

var d = 0;
function showHolidayBox() {
    // alert()

    let ho = document.getElementById("holidayPopUp");

    if (d % 2 == 0) {
        ho.style.display = "block";
    }

    if (d % 2 == 1) {
        ho.style.display = "none";
    }
    d++;

}


// accountPopUp=>

let acc1 = document.getElementById("acc")
acc1.addEventListener("click", showAccBox);

var e = 0;
function showAccBox() {
    // alert()

    let ac = document.getElementById("accountPopUp");

    if (e % 2 == 0) {
        ac.style.display = "block";
    }

    if (e % 2 == 1) {
        ac.style.display = "none";
    }
    e++;

}

// savedItemsPopUp=>
let sI = document.getElementById("saveI")
sI.addEventListener("click", saveIBox);

var f = 0;
function saveIBox() {
    // alert()

    let sav = document.getElementById("savedItemsPopUp");

    if (f % 2 == 0) {
        sav.style.display = "block";
    }

    if (f % 2 == 1) {
        sav.style.display = "none";
    }
    f++;

}

// naveBar
let hamb = document.getElementById("menuDiv")
hamb.addEventListener("click", showMenuBox);

var c = 0;
function showMenuBox() {
    // alert()


    let menuBox = document.getElementById("menuBox");

    if (c % 2 == 0) {
        menuBox.style.display = "block";
        let close = document.getElementById("change")

        close.textContent = "close";
        close.style.transition = "1s linear"
    }

    if (c % 2 == 1) {
        menuBox.style.display = "none";


        let close = document.getElementById("change")

        close.textContent = "menu";
        close.style.transition = "1s linear"

    }
    c++;

}
// showMenuBox()

let outerBox1 = document.getElementById("outerBox1");
outerBox1.addEventListener("click", showNext);
var o = 0;
function showNext() {
    let ch = document.getElementById("ch")

    let ext = document.getElementById("extend");
    if (o % 2 == 0) {
        ext.style.display = "block";
        outerBox1.style.backgroundColor = "#0046c4"
        ch.style.color = "white";

    }

    if (o % 2 == 1) {
        ext.style.display = "none";
        outerBox1.style.backgroundColor = "white"
        ch.style.color = "#0046c4";
    }
    o++;

}

let outerB = document.getElementById("outerBox2");
outerB.addEventListener("click", showNext1);
var v = 0;
function showNext1() {
    let ch1 = document.getElementById("ch1")

    // outerBox1.style.backgroundColor = "#0046c4"
    let sup = document.getElementById("Support");
    if (v % 2 == 0) {
        sup.style.display = "block";
        outerB.style.backgroundColor = "#0046c4"
        ch1.style.color = "white";
    }

    if (v % 2 == 1) {
        sup.style.display = "none";
        outerB.style.backgroundColor = "white"
        ch1.style.color = "#0046c4";


    }
    v++;

}




// searchRes=>



setInterval(searchInp, 1000)
function searchInp() {
    let inpt = document.getElementById("inp").value;

    if (inpt != "") {
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "block";
    }
    if (inpt == "") {
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "none";
    }
    // console.log(inpt)

}

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

// showAccBox();

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

//Linking of Pages=>


let signIn = document.getElementById("signIn")
let signUp = document.getElementById("cA");

signIn.addEventListener("click", openSignIn)
signUp.addEventListener("click", openSignUp)

function openSignIn() {
    window.location.href = "SignIn.html"
}

function openSignUp() {
    window.location.href = "SignUp.html";
}


// naveBar

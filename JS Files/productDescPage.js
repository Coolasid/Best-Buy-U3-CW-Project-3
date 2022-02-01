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

// let holiday = document.getElementById("holiday")
// holiday.addEventListener("click", showHolidayBox);

// var d = 0;
// function showHolidayBox() {
//     // alert()

//     let ho = document.getElementById("holidayPopUp");

//     if (d % 2 == 0) {
//         ho.style.display = "block";
//     }

//     if (d % 2 == 1) {
//         ho.style.display = "none";
//     }
//     d++;

// }


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


//access product Details form local Storage=>

let productArr = JSON.parse(localStorage.getItem("prodDesc"));
// console.log(productArr);

function appProd(productArr){


productArr.forEach((prod)=>{
    // console.log(prod.name)

    let Name = prod.name;

    let timelineName = document.getElementById("name");
    timelineName.textContent = Name;


    //for Brand Name
    let brandName = "";

    for(var i = 0; i < Name.length; i++){
        if(Name[i] != " "){
            brandName += Name[i];
        }else{
            break;
        }

    }

    // console.log(brandName);

    let brndN = document.getElementById("brandNmDiv");
    brndN.textContent = brandName;

    let sBN = document.getElementById("sBName");
    sBN.textContent = brandName;


    let productNm = document.getElementById("prodName");
    productNm.textContent = Name;

    let sPN = document.getElementById("sPName")
    sPN.textContent = Name;

    let cTitle = document.getElementById("title");
    cTitle.textContent = Name;

    let modelN = document.getElementById("modelNo");
    modelN.textContent = prod.model;

    let sPM = document.getElementById("sMName");
    sPM.textContent = prod.model;
    
    let Rating = document.getElementById("rat");
    Rating.textContent = prod.rating

    let iDiv = document.getElementById("iDiv");
        let img = document.createElement("img");
        img.src = prod.image;
        img.style.width = "75%"

    iDiv.append(img);


    let pr = document.getElementById("priceDiv");
    pr.textContent= "$"+ prod.price;

    let sa = document.getElementById("sav");
    sa.textContent = "Save $" + prod.save;

    let Was = document.getElementById("Was");
    Was.textContent = "Was $" + prod.was;


    tvA = ["LG", "INSIGNIA", "SAMSUNG", "Hisense", "SONY","TCL"]

    for(var i = 0; i < tvA.length; i++){
        if (tvA[i] == brandName){
            let dis = document.getElementById("series");
            dis.style.display = "block";
        }
    }

    lapA = ["LENOVO", "ASUS", "HP", "Apple", "ACER", "GEO", "DELL","MICROSOFT"]

    for(var i = 0; i< lapA.length; i++){
        if(lapA[i] == brandName){
            let ant = document.getElementById("antiV");
            ant.style.display = "block";
        }
    }


    let cart = document.getElementById("addCartBtn");
    cart.addEventListener("click",()=>{
        addProdToCart(prod)
    })


    let Oprice = "";

    let p = prod.price;
    // console.log(p)
    for(var i = 0; i < p.length; i++){
        if(p[i] != ","){
            Oprice += p[i]
        }
    }

    // console.log(Oprice);
    let inst = document.getElementById("I");
    inst.textContent = (Oprice/18).toFixed(2)

})

}

appProd(productArr)


// addToCart=>

function addProdToCart(prod) {
    // alert()

    // console.log(name,price);

    if (localStorage.getItem("Cart") === null) {
        localStorage.setItem("Cart", JSON.stringify([]))
    }

    var obj = {
        image: prod.image,
        name: prod.name,
        model: prod.model,
        rating: prod.rating,
        price: prod.price,
        save: prod.save,
        was: prod.was
    }

    let cartArr = JSON.parse(localStorage.getItem("Cart"));

    let countPA = 0;

    cartArr.forEach((el)=>{

        if(el.name == prod.name){
            countPA++;
            // console.log(countP)
        }
    })

    if(countPA > 0){
        alert("This product is already present in your Cart")
    }else{
        cartArr.push(obj);
        alert("Product is added to Cart")
    }

    

    localStorage.setItem("Cart", JSON.stringify(cartArr));

    
}



// summary=>

var n = 0;
let getDown = document.getElementById("peopleBuy");
getDown.addEventListener("click",()=>{

    // alert()

    if(n % 2 == 0){
        let ex = document.getElementById("exp");

        ex.textContent = "expand_less";

    }

    
    if(n % 2 == 1){
        let ex = document.getElementById("exp");

        ex.textContent = "expand_more";
    }
    
    n++;
})

// specification Part=>

let exp1 = document.getElementById("Sexp1")
let d1 = document.getElementById("d1")
d1.addEventListener("click",f1);

var F1 = 0;
function f1(){
    // alert()
    if(F1 % 2 == 0){
        exp1.textContent = "expand_less"
    }
    else{
        exp1.textContent = "expand_more"
    }

F1++;
    
}



let exp2 = document.getElementById("Sexp2")
let d2 = document.getElementById("d2")
d2.addEventListener("click", f2);

var F2 = 0;
function f2() {
    // alert()
    if (F2 % 2 == 0) {
        exp2.textContent = "expand_less"
    }
    else {
        exp2.textContent = "expand_more"
    }

    F2++;

}

let exp3 = document.getElementById("Sexp3")
let d3 = document.getElementById("d3")
d3.addEventListener("click", f3);

var F3 = 0;
function f3() {
    // alert()
    if (F3 % 3 == 0) {
        exp3.textContent = "expand_less"
    }
    else {
        exp3.textContent = "expand_more"
    }

    F3++;

}

let exp4 = document.getElementById("Sexp4")
let d4 = document.getElementById("d4")
d4.addEventListener("click", f4);

var F4 = 0;
function f4() {
    // alert()
    if (F4 % 4 == 0) {
        exp4.textContent = "expand_less"
    }
    else {
        exp4.textContent = "expand_more"
    }

    F4++;

}


let exp5 = document.getElementById("Sexp5")
let d5 = document.getElementById("d5")
d5.addEventListener("click", f5);

var F5 = 0;
function f5() {
    // alert()
    if (F5 % 5 == 0) {
        exp5.textContent = "expand_less"
    }
    else {
        exp5.textContent = "expand_more"
    }

    F5++;

}

//////////


// go to cart=>

let cartPage = document.getElementById("cart");
cartPage.style.cursor = "pointer"
cartPage.addEventListener("click",()=>{
    window.location.href = "cartPage.html"
    
})

let goTOHome = document.getElementById("bestBLogo")
goTOHome.style.cursor = "pointer"
goTOHome.addEventListener("click", () => {
    window.location.href = "../index.html"
})



// saveItems=>



let savedIArray = JSON.parse(localStorage.getItem("Save"));

// console.log(savedIArray);

savedIArray.forEach((prod) => {

    let appSI = document.getElementById("appSI");


    let Div = document.createElement("div");
    Div.style.width = "250px"
    Div.style.height = "150px"
    Div.style.margin = "2%"

    let inDiv = document.createElement("div");

    inDiv.style.height = "150px";


    let imgDiv = document.createElement("div");
    // imgDiv.style.display = "grid";
    imgDiv.style.height = "90px"
    imgDiv.style.width = "80%"
    imgDiv.style.margin = "auto";

    let img = document.createElement("img");
    img.src = prod.image;
    img.style.height = "100%"
    img.width.width = "100%";
    img.style.margin = "0 0 0 13%"

    imgDiv.append(img);


    let priceDiv = document.createElement("div");
    priceDiv.textContent = "$" + prod.price
    priceDiv.style.fontSize = ".9vw"
    priceDiv.style.fontWeight = "600"
    priceDiv.style.margin = "3% 0 0 0"
    priceDiv.style.textAlign = "center"



    let nameDiv = document.createElement("div");

    nameDiv.style.width = "100%"
    nameDiv.style.fontSize = ".85vw"
    nameDiv.style.height = "30px"
    nameDiv.textContent = prod.name;
    nameDiv.style.overflow = "scroll"
    nameDiv.style.margin = "5% 0 0 0"





    inDiv.append(imgDiv, priceDiv, nameDiv)


    Div.append(inDiv);


    appSI.append(Div);

})



// searchRes=>

let totalDBArr = JSON.parse(localStorage.getItem("totalData"));

// localStorage.setItem("totalData", JSON.stringify(totalDBArr));


// console.log(totalDBArr)
let searchResD = document.getElementById("searchRes")

// totalDBArr.forEach((el)=>{
//     console.log(el.name);
// })

setInterval(searchInp, 1000)
function searchInp() {
    let inpt = document.getElementById("inp").value.toUpperCase();

    searchResD.innerHTML = null;


    totalDBArr.forEach((el) => {

        // console.log(el.name);

        let spName = el.name.split(" ");

        // console.log(spName);

        for (var i = 0; i < spName.length; i++) {

            if (spName[i] == inpt) {

                appSearchProd(el);


            }
        }

    })

    if (inpt != " ") {
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "block";
    }
    if (inpt == "") {
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "none";
    }
    // console.log(inpt)

}

function appSearchProd(el) {
    // console.log(el);

    // searchResD.innerHTML = null;

    let Div = document.createElement("div");
    Div.style.height = "80px";
    Div.style.margin = "2% 3% 0 3%"
    Div.style.display = "grid";
    Div.style.gridTemplateColumns = "30% 50% 20%"


    let imgDiv = document.createElement("div");
    imgDiv.style.width = "100%"
    imgDiv.style.height = "100%"

    let img = document.createElement("img");
    img.style.width = "80%"
    img.style.height = "90%"
    img.src = el.image

    imgDiv.append(img);

    let nameDiv = document.createElement("div");
    nameDiv.textContent = el.name;
    nameDiv.style.fontSize = ".85vw"
    nameDiv.style.paddingLeft = "1%"
    nameDiv.style.paddingTop = "2%"
    nameDiv.addEventListener("click", () => {
        goTpd(el);
    })


    let priceD = document.createElement("div");
    priceD.textContent = "$" + el.price;
    priceD.style.padding = "5% 0 0 55%"
    priceD.style.fontWeight = "600"
    priceD.style.fontSize = ".85vw"



    Div.append(imgDiv, nameDiv, priceD);

    searchResD.append(Div);

}

function goTpd(el) {

    if (localStorage.getItem("prodDesc") == null) {
        localStorage.setItem("prodDesc", JSON.stringify([]))
    }

    localStorage.setItem("prodDesc", JSON.stringify([]));

    let pDArr = JSON.parse(localStorage.getItem("prodDesc"));


    pDArr.push(el);

    localStorage.setItem("prodDesc", JSON.stringify(pDArr));

    window.location.href = "productDescPage.html"

}
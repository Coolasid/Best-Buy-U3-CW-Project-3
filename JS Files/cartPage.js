// naveBar

// menuBox=>

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

let ap = document.getElementById("ap");
ap.addEventListener("click", () => {
    addLaptopData()

})

let tv5 = document.getElementById("tv");
tv5.addEventListener("click", () => {
    addTvData()
})




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

let goTOHome = document.getElementById("bestBLogo")
goTOHome.style.cursor = "pointer"
goTOHome.addEventListener("click", () => {
    window.location.href = "../index.html"
})

// go to cart=>

let cartPage = document.getElementById("cart");
cartPage.style.cursor = "pointer"
cartPage.addEventListener("click", () => {
    window.location.href = "cartPage.html"

})

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


// appendingItems in Cart Page=>

let cartArr = JSON.parse(localStorage.getItem("Cart"));

let tPrice = 0;
let tSPrice = 0;
let r  = 0;
let allProd = document.getElementById("allProdDiv");

function appProd(cartArr){

cartArr.forEach((prod)=>{

    



// updating OP=>
    let toN = prod.was;
    let opStr = ""
    for(var i = 0; i < toN.length; i++){
        if(toN[i] != ","){
            if (toN[i] != "."){
                opStr += toN[i];
            }
            
        }
        if(toN[i] == "."){
            break;
        }
    }

    // console.log(opStr);
    tPrice += +opStr;

///////

//updating Saving=>


    let savN = prod.save;
    let sStr = ""

    for(var i = 0; i < savN.length; i++){
        if(savN[i] != ","){
            if(savN[i] != "."){
                sStr += savN[i];
            }
        }
        if(savN[i] == "."){
            break;
        }
    }

    tSPrice += +sStr;

    

        let Div = document.createElement("div");
        Div.style.border = "1px solid  rgb(224,230,239);"
        // Div.style.height = "100px"
        Div.style.backgroundColor = "white"
        Div.style.borderRadius = "5px"

            let inDiv = document.createElement("div");
            inDiv.style.margin = "0 2% 0 4%"
            inDiv.style.paddingTop = "3%"
            inDiv.style.boxSizing = "borderBox"
            inDiv.style.display = "grid";
            inDiv.style.height = "130px"
            inDiv.style.gridTemplateColumns = "8% 25% 30% 20% 15%"

                let imgDiv = document.createElement("div");
                    let iDiv = document.createElement("div");
                    iDiv.style.height = "25%"
                    iDiv.style.width = "70%"
                    iDiv.style.marginTop = "5%"

                        let img = document.createElement("img");
                        img.src = prod.image;
                        img.style.width = "100%"
                        img.style.height = "100%"

                    iDiv.append(img);

                imgDiv.append(iDiv);

                let nameDiv = document.createElement("div");
                nameDiv.textContent = prod.name
                nameDiv.style.fontSize = ".8vw"
                

                let pickUpDiv = document.createElement("div");

                    let pA = document.createElement("div");
                    pA.style.display = "grid";
                    pA.style.gridTemplateColumns = "10% 90%"
                    pA.style.margin = "0 0 0 15%"

                        let rad = document.createElement("input");
                        rad.type = "radio";

                        let pickT = document.createElement("div");
                        pickT.innerHTML = `<span>Pickup at <span id="ai">Aiea</span> </span>`
                        pickT.style.fontSize = ".8vw"
                        pickT.style.marginTop = "1%"
                        pickT.style.fontWeight = "600"

                    pA.append(rad,pickT)


                    let redDiv = document.createElement("div");
                    redDiv.innerHTML = `<span>Ready for pickup <b> Today </b></span>`
                    redDiv.style.fontSize = ".7vw"
                    redDiv.style.margin = "1% 0 0 24%"

                    let eleDiv = document.createElement("div");
                    eleDiv.innerHTML = `Eligible for curbside pickup`
                    eleDiv.style.fontSize = ".7vw"
                    eleDiv.style.margin = "1% 0 0 24%"



                    let shipD = document.createElement("div");
                    shipD.style.display = "grid";
                    shipD.style.gridTemplateColumns = "10% 90%"
                    shipD.style.margin = "8% 0 0 15%"

                        let rad1 = document.createElement("input");
                        rad1.type = "radio";

                        let shipT = document.createElement("div");
                        shipT.innerHTML = `<span>Shipping to <span id="ai">96939</span> </span>`
                        shipT.style.fontSize = ".8vw"
                        shipT.style.marginTop = "1%"
                        shipT.style.fontWeight = "600"

                    shipD.append(rad1, shipT)

                    let ship = document.createElement("div");
                    ship.innerHTML = `Unavailable in this area`
                    ship.style.fontSize = ".7vw"
                    ship.style.margin = "1% 0 0 24%"

                pickUpDiv.append(pA, redDiv, eleDiv, shipD,ship)


                let addDiv = document.createElement("div");

                    let selDiv = document.createElement("select");
                    selDiv.style.width = "37%"
                    selDiv.style.height = "40px"
                    selDiv.style.borderRadius = "5px"
                    selDiv.style.margin = "0 0 0 45%"
                    selDiv.style.outline = "none";
                    selDiv.style.border = "1px solid rgb(0,70,190)"
                    selDiv.style.fontSize = "1.1vw"
                    selDiv.style.paddingLeft = "1.5%"

                        let op1 = document.createElement("option")
                        op1.textContent = "1"

                        let op2 = document.createElement("option")
                        op2.textContent = "2"

                        let op3 = document.createElement("option")
                        op3.textContent = "3"

                        let op4 = document.createElement("option")
                        op4.textContent = "4"

                       

                    selDiv.append(op1, op2, op3, op4);

                    let remDiv = document.createElement("div");
                    remDiv.style.fontSize = ".75vw"
                    remDiv.textContent = "remove";
                    remDiv.style.margin = "1% 0 0 53% "
                    remDiv.addEventListener("click",()=>{
                        removeProd(prod);
                    })


                    let saveDiv = document.createElement("div");
                    saveDiv.style.fontSize = ".75vw"
                    saveDiv.textContent = "save";
                    saveDiv.style.margin = "2% 0 0 56% "
                    saveDiv.addEventListener("click",()=>{
                        removeProd(prod);
                    })


                addDiv.append(selDiv,remDiv,saveDiv);


                let priceDiv = document.createElement("div");

                    let oPDiv = document.createElement("div");
                    oPDiv.textContent = "$"+ prod.price;
                    oPDiv.style.fontSize = ".95vw"
                    oPDiv.style.fontWeight = "600"
                    // oPDiv.style.margin = "0 0 0 60%"
                    oPDiv.style.textAlign = "right"

                    let svDiv = document.createElement("div");
                    svDiv.textContent = "Save $" + prod.save
                    svDiv.style.fontSize = ".7vw"
                    svDiv.style.width = "45%"
                    svDiv.style.height = "16.5px"
                    svDiv.style.padding = "3% 0 0 0 "
                    svDiv.style.boxSizing = "borderBox"
                    svDiv.style.margin = "1% 0 0 55%"
                    svDiv.style.textAlign = "center"
                    svDiv.style.fontWeight = "600"
                    svDiv.style.color = "white";
                    svDiv.style.backgroundColor = "rgb(187,6,40)"

                    let wasDiv = document.createElement("div");
                    wasDiv.textContent = "Was $" + prod.was;
                    wasDiv.style.fontSize = ".8vw"
                    wasDiv.style.margin = "2% 0 0 0"
                    wasDiv.style.textAlign = "right"
                    

                priceDiv.append(oPDiv, svDiv, wasDiv);





            inDiv.append(imgDiv,nameDiv,pickUpDiv,addDiv,priceDiv);

        Div.append(inDiv);


        let empDiv = document.createElement("div");
        empDiv.style.height = "30px"
        empDiv.style.backgroundColor = "rgb(244,246,249)"

    allProd.append(Div,empDiv);




    

})

}

appProd(cartArr)




//remove functionality =>
//saveFunct=>

function removeProd(prod){
///////save////////////
    if(localStorage.getItem("Save") == null){
        localStorage.setItem("Save",JSON.stringify([]))
    }

    let savedItemsA = JSON.parse(localStorage.getItem("Save"));
    
    
    let sc = 0;
    savedItemsA.forEach((el)=>{
        if(el.name == prod.name){
            sc++;
        }
    })
    if(sc>0){
        alert("You already saved this item")
    }else{
        savedItemsA.push(prod);
    }

    localStorage.setItem("Save",JSON.stringify(savedItemsA));


///////////////////

    allProd.innerHTML = null;

    let cart = JSON.parse(localStorage.getItem("Cart"));

    var updCart = [];

    cart.forEach((el)=>{
        if(el.name != prod.name){
            updCart.push(el);
        }
    })
    appProd(updCart);

    localStorage.setItem("Cart",JSON.stringify(updCart));

    window.location.href = "cartPage.html"

}


/////////////








let totalop = document.getElementById("totalOP");
totalop.textContent = "$"+ tPrice;

let totalS = document.getElementById("totalSav");
totalS.textContent = "-$"+ tSPrice;


// console.log(tPrice,tSPrice)

let tp = tPrice - tSPrice + 41
let totP = document.getElementById("totalP")
totP.textContent = "$" + tp ;


//linking CheckoutPage=>

let ckO = document.getElementById("checkOutDiv");
ckO.addEventListener("click",()=>{
    window.location.href = "checkoutPage.html"
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


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



//getting productData from localStroage=>

let prodData = JSON.parse( localStorage.getItem("productData"));

// console.log(prodData);

let appProd = document.getElementById("appProducts");


//appending all products=>


prodData.forEach(({name,image,model,rating,price,save,was}) => {
    // console.log(product.name);

    

    let mainDiv = document.createElement("div");
    mainDiv.style.display = "grid";
    mainDiv.style.gridTemplateColumns = "33.33% 33.33% 33.33%"
    mainDiv.style.width = "100%"
    mainDiv.style.height = "290px"
    mainDiv.style.margin = "2% 0 0 0"
    mainDiv.style.borderBottom = "1px solid rgb(197,203,213)"

        let fDiv = document.createElement("div");
            
            let imgDiv = document.createElement("div");
            imgDiv.style.width = "80%"
            imgDiv.style.height = "66%"
            imgDiv.style.margin = "auto";

                let img = document.createElement("img");
                img.src = image;
                img.style.width = "100%"
                img.style.height = "100%"

            imgDiv.append(img);


            let seeOptDiv = document.createElement("div");
            seeOptDiv.textContent = "See More Options";
            // seeOptDiv.style.color = "rgb(24,100,204)"
            seeOptDiv.style.fontSize = ".78vw"
            seeOptDiv.style.margin = "3% 0 0 0"
            seeOptDiv.style.textAlign = "center"

            
        fDiv.append(imgDiv,seeOptDiv);



        let sDiv = document.createElement("div");
        

            let iSDiv = document.createElement("div");
            iSDiv.style.margin = "2.5% 0 0 3%"
            iSDiv.style.height = "96%"

                let nameDiv = document.createElement("div");
                nameDiv.textContent = name;
                nameDiv.style.fontSize = ".79vw"
                
                let modelDiv = document.createElement("div");
                modelDiv.style.margin = "1.5% 0 0 0"
                

                    let modelText = document.createElement("span");
                    modelText.textContent = "Model: ";
                    modelText.style.fontSize = ".72vw"
                    modelText.style.fontWeight = "700"
                    modelText.style.color = "rgb(4,12,19)";

                    let modelNo = document.createElement("span");
                    modelNo.textContent = model;
                    modelNo.style.fontSize = ".72vw";


                    let skuText = document.createElement("span");
                    skuText.textContent = "SKU: ";
                    skuText.style.fontSize = ".72vw"
                    skuText.style.fontWeight = "700"
                    skuText.style.color = "rgb(4,12,19)";
                    skuText.style.margin = "0 0 0 10%"
                    

                    let skuNo = document.createElement("span");
                    skuNo.textContent = "6452992";
                    skuNo.style.fontSize = ".72vw";
                    

                modelDiv.append(modelText,modelNo,skuText,skuNo);



                let ratingDiv = document.createElement("div");
                ratingDiv.style.display = "grid"
                ratingDiv.style.gridTemplateColumns = "27% 8% 10% "

                   let ratingT = document.createElement("div");
                    ratingT.textContent = "Customer Rating: ";
                    ratingT.style.fontSize = ".72vw"
                    ratingT.style.fontWeight = "700"
                    ratingT.style.color = "rgb(4,12,19)";
                    ratingT.style.marginTop = "7%"


                    let ratingNo = document.createElement("div");
                    ratingNo.textContent ="("+ rating+")";
                    ratingNo.style.fontSize = ".8vw";
                    ratingNo.style.color = "rgb(0,30,115)"
                    ratingNo.style.fontWeight = "600"
                    ratingNo.style.marginTop = "20%"

                    let starSpan = document.createElement("div");
                    starSpan.innerHTML =`<div class="material-icons-outlined" id="star">
                                            star
                                        </div>`

                    starSpan.style.margin = "15% 0 0 1%"

                

                ratingDiv.append(ratingT, ratingNo, starSpan);


                let getItDiv = document.createElement("div");
                getItDiv.style.color ="rgb(49,128,0)"
                getItDiv.textContent = "Get it today nearby"
                getItDiv.style.fontSize = ".78vw"
                getItDiv.style.fontWeight = "600"
                getItDiv.style.marginTop = "2.5%"



                let pickUpDiv = document.createElement("div");
                pickUpDiv.style.display = "grid";
                pickUpDiv.style.gridTemplateColumns = "7% 14% 50%"
                pickUpDiv.style.marginTop = "4%"

                    let logoDiv = document.createElement("div");
                    logoDiv.innerHTML = `<div class="material-icons-outlined" id="logoD">
                                        cottage
                                        </div>`
                    


                    let pickUpText = document.createElement("div");
                    pickUpText.textContent = "Pickup: "
                    pickUpText.style.fontSize = ".81vw"
                    pickUpText.style.fontWeight = "600"
                    pickUpText.style.paddingTop = "9%"
                    pickUpText.style.color = "rgb(4,12,19)"

                    let otherText = document.createElement("div");
                    otherText.textContent = "Available today at Aiea"
                    otherText.style.fontSize = ".8vw"
                    otherText.style.marginTop = "3%"

                pickUpDiv.append(logoDiv,pickUpText,otherText);


                let seeAll = document.createElement("div");
                seeAll.textContent = "See all pickup locations"
                seeAll.style.fontSize = ".7vw"
                // seeAll.style.color = " rgb(4,87,200)"
                seeAll.style.margin = "0 0 0 7%"



                let deliveryDiv = document.createElement("div");
                deliveryDiv.style.display = "grid";
                deliveryDiv.style.gridTemplateColumns = "8% 16% 50%"
                deliveryDiv.style.marginTop = "2.5%"

                    let DlogoDiv = document.createElement("div");
                    DlogoDiv.innerHTML = `<span class="material-icons-outlined">
                                            local_shipping
                                            </span>`



                    let devT = document.createElement("div");
                    devT.textContent = "Delivery: "
                    devT.style.fontSize = ".81vw"
                    devT.style.fontWeight = "600"
                    devT.style.paddingTop = "13%"
                    devT.style.color = "rgb(4,12,19)"

                    let avaliDiv = document.createElement("div");
                    avaliDiv.textContent = "Available in your area"
                    avaliDiv.style.fontSize = ".8vw"
                    avaliDiv.style.marginTop = "4.5%"

                deliveryDiv.append(DlogoDiv, devT, avaliDiv);


                let estDiv = document.createElement("div");
                estDiv.textContent = "Estimates for 96939"
                estDiv.style.fontSize = ".7vw"
                // estDiv.style.color = " rgb(4,87,200)"
                estDiv.style.margin = "0 0 0 7%"



                let compDiv = document.createElement("div");
                compDiv.style.marginTop = "5%"
                compDiv.style.display = "grid";
                compDiv.style.gridTemplateColumns = "50% 50%"

                    let compcheckBoxDiv = document.createElement("div");
                    compcheckBoxDiv.style.display = "grid";
                    
                    
                    
                    let saveDiv = document.createElement("div");

                compDiv.append(compcheckBoxDiv,saveDiv);


            iSDiv.append(nameDiv, modelDiv, ratingDiv, getItDiv, pickUpDiv, seeAll, deliveryDiv, estDiv, compDiv);   
            
        sDiv.append(iSDiv);



        let tDiv = document.createElement("div");


    mainDiv.append(fDiv,sDiv,tDiv);

appProd.append(mainDiv);

})
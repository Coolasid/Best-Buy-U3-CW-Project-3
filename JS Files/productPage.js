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

let goTOHome = document.getElementById("bestBLogo")
goTOHome.style.cursor = "pointer"
goTOHome.addEventListener("click", () => {
    window.location.href = "HomePage.html"
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
    mainDiv.style.height = "270px"
    mainDiv.style.margin = "2% 0 0 0"
    mainDiv.style.borderBottom = "1px solid rgb(197,203,213)"

        let fDiv = document.createElement("div");
            
            let imgDiv = document.createElement("div");
            imgDiv.style.width = "80%"
            imgDiv.style.height = "66%"
            imgDiv.style.margin = "auto";
            imgDiv.addEventListener("click",()=>{
                goToProdDescPage(image, name, model, rating, price, save, was)
            })

                let img = document.createElement("img");
                img.src = image;
                img.style.width = "100%"
                img.style.height = "100%"
                img.style.cursor = "pointer";

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
                nameDiv.addEventListener("click", () => {
                    goToProdDescPage(image, name, model, rating, price, save, was)
                })
                
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
                compDiv.style.marginTop = "8%"
                compDiv.style.display = "grid";
                compDiv.style.gridTemplateColumns = "30% 50%"

                    let compcheckBoxDiv = document.createElement("div");
                    compcheckBoxDiv.style.display = "grid";
                    compcheckBoxDiv.style.gridTemplateColumns = "25% 70%"


                        let check = document.createElement("input")
                        check.type = "checkBox";

                        let compT = document.createElement("div")
                        compT.textContent = "Compare"
                        compT.style.color = "rgb(24,100,204)"
                        compT.style.fontSize = ".85vw"
                        compT.style.paddingTop = "3%"


                    compcheckBoxDiv.append(check,compT)
                    
                    
                    let saveDiv = document.createElement("div");
                    saveDiv.style.display = "grid";
                    saveDiv.style.gridTemplateColumns = "17% 70%"



                        let savel = document.createElement("div");
                        savel.innerHTML = `<div class="material-icons-outlined" id="savelogo">
                                            bookmark_border
                                            </div>`

                        savel.addEventListener("click",saveI);

                        function saveI(){
                            savel.style.color = "rgb(0,70,190)";
                        }


                        let saveT = document.createElement("div")
                        saveT.textContent = "Save";
                        saveT.style.color = "rgb(24,100,204)"
                        saveT.style.fontSize = ".85vw"
                        saveT.style.paddingTop = "1.5%";

                    saveDiv.append(savel, saveT)


                compDiv.append(compcheckBoxDiv,saveDiv);


            iSDiv.append(nameDiv, modelDiv, ratingDiv, getItDiv, pickUpDiv, seeAll, deliveryDiv, estDiv, compDiv);   
            
        sDiv.append(iSDiv);



        let tDiv = document.createElement("div");
            

            let itDiv = document.createElement("div");
            itDiv.style.margin = "1.5% 0 0 25%"
            
            

                let priceDiv = document.createElement("div");
                priceDiv.textContent = "$" + price
                priceDiv.style.color = "rgb(29,37,44)"
                priceDiv.style.fontSize = "1.7vw"
                priceDiv.style.fontWeight = "600"


                
                let savePDiv = document.createElement("div");
                savePDiv.style.display = "grid";
                savePDiv.style.width = "55%"
                savePDiv.style.height = "21px"
                savePDiv.style.gridTemplateColumns = "50% 52%"
                // savePDiv.style.border = "none"

                    
                        let savDiv = document.createElement("div");
                        savDiv.textContent = "Save $" + save;
                        savDiv.style.fontSize = ".8vw"
                        savDiv.style.fontWeight = "600"
                        savDiv.style.backgroundColor = "rgb(187,6,40)"
                        savDiv.style.color = "white"
                        savDiv.style.padding = "3.8% 0 0 0"
                        savDiv.style.textAlign = "center"

                        let wasDiv = document.createElement("div");
                        wasDiv.textContent = "Was $"+ was
                        wasDiv.style.fontSize = ".8vw"
                        wasDiv.style.padding = "4.8% 0 0 7%"
                         wasDiv.style.color = "rgb(29,37,44)"

                
                savePDiv.append(savDiv,wasDiv);


                let freeDiv = document.createElement("div");
                freeDiv.textContent = "Free item with purchase"
                freeDiv.style.fontSize = ".75vw"
                freeDiv.style.fontWeight = "600"
                freeDiv.style.color = "rgb(0,70,190)"
                freeDiv.style.marginTop = "6%"
                freeDiv.style.cursor = "pointer"


                let addBtnDiv = document.createElement("div");
                addBtnDiv.style.width = "88%"
                addBtnDiv.style.height = "30px"
                addBtnDiv.style.borderRadius = "5px"
                addBtnDiv.style.marginTop = "6%"
                // addBtnDiv.style.paddingTop = "1.5%"
                addBtnDiv.style.boxSizing = "borderBox";
                addBtnDiv.style.backgroundColor = "rgb(255,224,0)"
                // addBtnDiv.addEventListener("mouseover",()=>{
                //     addBtnDiv.style.backgroundColor = "rgb(255,224,0)"
                // })


                        let addBtnIDiv = document.createElement("div");
                        addBtnIDiv.style.width = "50%"
                        addBtnIDiv.style.height = "20px"
                        addBtnIDiv.style.margin = "0 0 0 28% "
                        addBtnIDiv.style.paddingTop = "2.5%"
                        addBtnIDiv.style.display = "grid";
                        addBtnIDiv.style.gridTemplateColumns = "25% 75%"
                        addBtnDiv.style.cursor = "pointer"
                        addBtnDiv.addEventListener("click", () => {
                            addProdToCart(image,name,model,rating,price,save,was)
                        });


                            let addCartLogo = document.createElement("div")
                            addCartLogo.innerHTML = `<span class="material-icons-outlined" id="cart">
                                                        shopping_cart
                                                        </span>`

                            let addCartText = document.createElement("div");
                            addCartText.textContent = "Add to Cart";
                            addCartText.style.fontSize = ".85vw"
                            addCartText.style.fontWeight = "600"
                            addCartText.style.paddingTop = "3%"
                            


                        addBtnIDiv.append(addCartLogo,addCartText)

                addBtnDiv.append(addBtnIDiv)


            itDiv.append(priceDiv, savePDiv, freeDiv, addBtnDiv);


        tDiv.append(itDiv);

    mainDiv.append(fDiv,sDiv,tDiv);

appProd.append(mainDiv);

})


//////////////


// addProdToCart=>



// go to cart=>

let cartPage = document.getElementById("cart");
cartPage.style.cursor = "pointer"
cartPage.addEventListener("click", () => {
    window.location.href = "cartPage.html"

})

function addProdToCart(image, name, model, rating, price, save, was){
    // alert()

    // console.log(name,price);

    if(localStorage.getItem("Cart") === null){
        localStorage.setItem("Cart",JSON.stringify([]))
    }

    var obj = {
        image:image,
        name:name,
        model:model,
        rating:rating,
        price:price,
        save:save,
        was:was
    }

    let cartArr = JSON.parse(localStorage.getItem("Cart"));

    cartArr.push(obj);

    localStorage.setItem("Cart",JSON.stringify(cartArr));
    alert("Product is added to Cart")
    
}


//adding & go To prodDescPage=>

function goToProdDescPage(image, name, model, rating, price, save, was){

    // alert();

    if(localStorage.getItem("prodDesc") === null ){
        localStorage.setItem("prodDesc" , JSON.stringify([]));
    }

    localStorage.setItem("prodDesc", JSON.stringify([]));

    var obj = {
        image: image,
        name: name,
        model: model,
        rating: rating,
        price: price,
        save: save,
        was: was
    }

    let prodDesc = JSON.parse(localStorage.getItem("prodDesc"));

    prodDesc.push(obj);

    localStorage.setItem("prodDesc", JSON.stringify(prodDesc));

    window.location.href = "productDescPage.html";

}


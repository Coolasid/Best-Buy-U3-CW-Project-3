// Linking Pages=>

let goToSuccessP = document.getElementById("placeODiv");
goToSuccessP.addEventListener("click",()=>{
    window.location.href = "success.html";
})

let returnToHome = document.getElementById("return");
returnToHome.addEventListener("click", () => {
    window.location.href = "cartPage.html"
})

let goHome = document.getElementById("logo");
goHome.addEventListener('click', () => {
    window.location.href = "../index.html"
})


function limitC(element){
    let maxChar = 16;

    if(element.value.length > maxChar){
        element.value = element.value.substr(0,maxChar);
    }
   
}

function cvv1(element){
    let maChar = 3;

    if(element.value.length > maChar){
        element.value = element.value.substr(0,maChar);
    }
}

function cvv2(element) {
    let maChar = 4;

    if (element.value.length > maChar) {
        element.value = element.value.substr(0, maChar);
    }
}

let cartArr = JSON.parse(localStorage.getItem("Cart"));

console.log(cartArr);


let tPrice = 0;
let tSPrice = 0;

cartArr.forEach(({name,image,price,save})=>{
    // console.log(name);


    // updating P=>
    let toN = price;
    let opStr = ""
    for (var i = 0; i < toN.length; i++) {
        if (toN[i] != ",") {
            if (toN[i] != ".") {
                opStr += toN[i];
            }

        }
        if (toN[i] == ".") {
            break;
        }
    }

    // console.log(opStr);
    tPrice += +opStr;

    ///////

    //updating Saving=>


    let savN = save;
    let sStr = ""

    for (var i = 0; i < savN.length; i++) {
        if (savN[i] != ",") {
            if (savN[i] != ".") {
                sStr += savN[i];
            }
        }
        if (savN[i] == ".") {
            break;
        }
    }

    tSPrice += +sStr;


    let appProd = document.getElementById("NowAppProdH");

        let Div = document.createElement("div");
        Div.style.marginTop = "7%"

            // let aveD = document.createElement("div");
            // aveD.textContent = "Available Tomorrow"
            // aveD.style.fontSize = ".66vw"

            let prodDiv = document.createElement("div");
            prodDiv.style.display = "grid";
            prodDiv.style.gridTemplateColumns = "25% 50% 25%"
            prodDiv.style.marginTop = "3%"
            prodDiv.style.height = "50px"

                let imgD = document.createElement("div");


                    let imgDiv = document.createElement("div");
                    imgDiv.style.width = "80%"
                    imgDiv.style.height = "55%"
                    imgDiv.style.marginTop = "7%"


                        let img = document.createElement("img");
                        img.src = image;
                        img.style.width = "100%"
                        img.style.height = "100%"

                    imgDiv.append(img);

                imgD.append(imgDiv);

                let nameD = document.createElement("div");
                nameD.textContent = name.substr(0,39);
                nameD.style.fontSize = ".78vw"
                nameD.style.paddingLeft = "2%"

                let pDiv = document.createElement("div");
                
                    let priceD = document.createElement("div");
                    priceD.textContent = "$"+price;
                    priceD.style.fontSize = ".8vw"
                    // priceD.style.margin = "0 0 0 50%"
                    priceD.style.textAlign = "right"
                    priceD.style.fontWeight = "600"


                    let remDiv = document.createElement("div");
                    remDiv.textContent = "Remove";
                    remDiv.style.textAlign = "right"
                    remDiv.style.fontSize = ".8vw"
                    remDiv.style.marginTop = "2%"

                pDiv.append(priceD,remDiv)

            prodDiv.append(imgD,nameD,pDiv);

            let line = document.createElement("div");
            line.style.borderBottom = "1px solid rgb(197,203,213)"

        Div.append(prodDiv,line);


    appProd.append(Div);
})



let totalP = document.getElementById("totalOP");
let p = tPrice +41
totalP.textContent = "$" + tPrice;

let totalS = document.getElementById("totalSav");
totalS.textContent = "$" + tSPrice;

let to = document.getElementById("totalOp");
to.textContent = "$"+ p;


// console.log(tPrice,tSPrice)


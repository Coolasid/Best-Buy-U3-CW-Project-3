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



setInterval(searchInp,1000)
function searchInp(){
    let inpt = document.getElementById("inp").value;

    if(inpt != ""){
        let searchR = document.getElementById("searchRes");
        searchR.style.display = "block";
    }
    if(inpt == ""){
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


// Slider=>

let apProd = document.getElementById("aProducts");

var sliderArr = [

    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331591_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class A9G MASTER Series OLED 4K UHD Smart Android TV",
        rating: "4.7",
        price: "$2,299.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401199_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class A8H Series OLED 4K UHD Smart Android TV",
        rating: "5.0",
        price: "$1,899.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455215_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.8",
        price: "$2,999.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401206_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 65 Class X950H Series LED 4K UHD Smart Android TV",
        rating: "4.9",
        price: "$1,424.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Samsung - 70 Class TU6985 4K Crystal UHD Smart Tizen TV",
        rating: "4.5",
        price: "$599.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331597_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 65 Class A9G MASTER Series OLED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$2,999.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455217_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV",
        rating: "4.5",
        price: "$1,699.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401718_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Samsung - 65 Class 8 Series LED 4K UHD Smart Tizen TV",
        rating: "4.9",
        price: "$749.99"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453321_sd.jpg;maxHeight=272;maxWidth=400",
        name: "LG - 65 Class A1 Series OLED 4K UHD Smart webOS TV",
        rating: "4.5",
        price: "$1,499.99"
    },


]


for(var i = 0; i < 6; i++){
    
}
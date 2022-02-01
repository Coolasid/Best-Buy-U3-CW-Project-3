// naveBar

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

// ///////showMenuBox()

let outerBox1 = document.getElementById("outerBox1");
outerBox1.addEventListener("click",showNext);
var o = 0;
function showNext(){
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
ap.addEventListener("click",()=>{
    addLaptopData()
    
})

let tv5 = document.getElementById("tv");
tv5.addEventListener("click",()=>{
    addTvData()
})



///////////////

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
    window.location.href = "../All Pages/cartPage.html"

})

let signIn = document.getElementById("signIn")
let signUp = document.getElementById("cA");

signIn.addEventListener("click", openSignIn)
signUp.addEventListener("click", openSignUp)

function openSignIn() {
    window.location.href = "../All Pages/SignIn.html"
}

function openSignUp() {
    window.location.href = "../All Pages/SignUp.html";
}

// naveBar

// Slider=>

let apProd = document.getElementById("aProducts");

var sliderArr1 = [

    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "SONY - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331591_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class A9G MASTER Series OLED 4K UHD Smart Android TV",
        rating: "4.7",
        price: "$2,299"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401199_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class A8H Series OLED 4K UHD Smart Android TV",
        rating: "5.0",
        price: "$1,899"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455215_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.8",
        price: "$2,999"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401206_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 65 Class X950H Series LED 4K UHD Smart Android TV",
        rating: "4.9",
        price: "$1,424"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476246cv21d.jpg;maxHeight=272;maxWidth=400",
        name: "Samsung - 70 Class TU6985 4K Crystal UHD Smart Tizen TV",
        rating: "4.5",
        price: "$599"
    },

    

]





let sliderArr2 = [

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450480_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331597_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 65 Class A9G MASTER Series OLED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$2,999"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459302_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455217_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 55 Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV",
        rating: "4.5",
        price: "$1,699"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401049_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Sony - 75 Class XBR X800H Series LED 4K UHD Smart Android TV",
        rating: "4.5",
        price: "$1,234"
    },

    {
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401718_sd.jpg;maxHeight=272;maxWidth=400",
        name: "Samsung - 65 Class 8 Series LED 4K UHD Smart Tizen TV",
        rating: "4.9",
        price: "$749"
    },

  

]

// let rightArrow = document.getElementById("rightA");
// rightArrow.addEventListener("click", forward);

function original() {

    let productBox = document.getElementById('aProducts');


        sliderArr1.forEach((el) =>{

            // console.log(el.name);

            let nm = el.name;
            let img = el.img;
            let rating = el.rating;
            let price = el.price;


            let Div = document.createElement("div");
            Div.style.margin = "10% 0 0 2% "
            // Div.style.transition = "1s linear"

                let imgDiv = document.createElement("div");
                imgDiv.style.height = "55%"
                    let img1 = document.createElement('img');
                    img1.src = img;
                    img1.style.width = "90%";

                imgDiv.append(img1);
                
                let nmDiv = document.createElement("div");
                nmDiv.textContent = nm;
                nmDiv.style.width = "85%"
                nmDiv.style.fontSize = ".78vw"
                nmDiv.style.color = "#0457c8"
                nmDiv.style.lineHeight = "17px"
                nmDiv.style.height = "55px"


                let ratDiv = document.createElement("div");
                ratDiv.textContent = "Ratings: " + rating;
                ratDiv.style.fontSize = ".8vw"
                ratDiv.style.height = "20px"
            ratDiv.style.color = "#ffce00"

                let priceDiv = document.createElement("div");
                priceDiv.textContent = price;
                priceDiv.style.fontSize = "1vw";
                priceDiv.style.fontWeight = "600"


            Div.append(imgDiv,nmDiv,ratDiv,priceDiv);

            productBox.append(Div)
        })

}

original()



let rightArrow = document.getElementById("rightA");
rightArrow.addEventListener("click", forward);

function forward() {

    let productBox = document.getElementById('aProducts');
    productBox.textContent = null;

    sliderArr2.forEach((el) => {

        // console.log(el.name);

        let nm = el.name;
        let img = el.img;
        let rating = el.rating;
        let price = el.price;


        let Div = document.createElement("div");
        Div.style.margin = "10% 0 0 2% "

        let imgDiv = document.createElement("div");
        imgDiv.style.height = "55%"
        let img1 = document.createElement('img');
        img1.src = img;
        img1.style.width = "90%";

        imgDiv.append(img1);

        let nmDiv = document.createElement("div");
        nmDiv.textContent = nm;
        nmDiv.style.width = "85%"
        nmDiv.style.fontSize = ".78vw"
        nmDiv.style.color = "#0457c8"
        nmDiv.style.lineHeight = "17px"
        nmDiv.style.height = "55px"


        let ratDiv = document.createElement("div");
        ratDiv.textContent = "Ratings: " + rating;
        ratDiv.style.fontSize = ".8vw"
        ratDiv.style.height = "20px"
        ratDiv.style.color = "#ffce00"

        let priceDiv = document.createElement("div");
        priceDiv.textContent = price;
        priceDiv.style.fontSize = "1vw";
        priceDiv.style.fontWeight = "600"


        Div.append(imgDiv, nmDiv, ratDiv, priceDiv);

        productBox.append(Div)
    })

}



let leftArrow = document.getElementById("leftA");
leftArrow.addEventListener("click", backward);

function backward() {

    let productBox = document.getElementById('aProducts');

    productBox.textContent = null;
    sliderArr1.forEach((el) => {

        // console.log(el.name);

        let nm = el.name;
        let img = el.img;
        let rating = el.rating;
        let price = el.price;


        let Div = document.createElement("div");
        Div.style.margin = "10% 0 0 2% "

        let imgDiv = document.createElement("div");
        imgDiv.style.height = "55%"
        
        let img1 = document.createElement('img');
        img1.src = img;
        // img1.style.margin = " 0 0 0 10%"
        img1.style.width = "90%";

        imgDiv.append(img1);

        let nmDiv = document.createElement("div");
        nmDiv.textContent = nm;
        nmDiv.style.width = "85%"
        nmDiv.style.fontSize = ".78vw"
        nmDiv.style.color = "#0457c8"
        nmDiv.style.lineHeight = "17px"
        nmDiv.style.height = "55px"


        let ratDiv = document.createElement("div");
        ratDiv.textContent = "Ratings: " + rating;
        ratDiv.style.fontSize = ".8vw"
        ratDiv.style.height = "20px"
        ratDiv.style.color = "#ffce00"

        let priceDiv = document.createElement("div");
        priceDiv.textContent = price;
        priceDiv.style.fontSize = "1vw";
        priceDiv.style.fontWeight = "600"


        Div.append(imgDiv, nmDiv, ratDiv, priceDiv);

        productBox.append(Div)
    })

}







var TvDataBase = [

    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452992_sd.jpg;maxHeight=300;maxWidth=450",
        name:"LG - 70” Class UP8070 Series LED 4K UHD Smart webOS TV",
        model:"70UP8070PUA",
        rating:"5",
        price:"749",
        save:"250",
        was:"999"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450248_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Insignia™ - 55 Class F50 Series QLED 4K UHD Smart Fire TV",
        model: "NS-55F501NA22",
        rating: "3.5",
        price: "399",
        save: "250",
        was: "649"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 50 Class 7 Series LED 4K UHD Smart Tizen TV",
        model: " UN50TU7000FXZA",
        rating: "2.7",
        price: "379",
        save: "100",
        was: "479"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452965_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 43 Class X80J Series LED 4K UHD Smart Google TV",
        model: "KD43X80J",
        rating: "3.8",
        price: "449",
        save: "150",
        was: "599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 65 Class 7 Series LED 4K UHD Smart Tizen TV",
        model: "UN65TU7000FXZA",
        rating: "4.8",
        price: "499",
        save: "150",
        was: "649"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6247/6247254_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Insignia™ - 32 Class F20 Series LED HD Smart Fire TV",
        model: " NS-32DF310NA19",
        rating: "4.7",
        price: "149",
        save: "50",
        was: "199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453312_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG - 65 Class C1 Series OLED 4K UHD Smart webOS TV",
        model: "OLED65C1PUB",
        rating: "3.9",
        price: "1,799",
        save: "300",
        was: "2,099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452997_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 50 Class 8000 Series LED 4K UHD Smart Tizen TV",
        model: "UN50AU8000FXZA",
        rating: "1.9",
        price: "479",
        save: "90",
        was: "569"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360291_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 40 Class 5 Series LED Full HD Smart Tizen TV",
        model: "UN40N5200AFXZA",
        rating: "2.9",
        price: "549",
        save: "80",
        was: "629"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476896_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG - 70 Class NanoCell 75 Series LED 4K UHD Smart webOS TV",
        model: "70NANO75UPA",
        rating: "3.5",
        price: "899",
        save: "300",
        was: "1,199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484318_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Hisense - 120 L9 Series TriChroma Laser TV with ALR Screen - Black",
        model: "120L9G-CINE120A",
        rating: "1.5",
        price: "4,999",
        save: "1000",
        was: "5,999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455218_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 65 Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV",
        model: "XR65A80J",
        rating: "3.4",
        price: "1,999",
        save: "300",
        was: "2,299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280538_sd.jpg;maxHeight=300;maxWidth=450",
        name: "TCL - 32 Class 3-Series LED Full HD Smart Roku TV",
        model: "32S327",
        rating: "1.4",
        price: "199",
        save: "20",
        was: "219"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453207_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 75 Class X85J Series LED 4K UHD Smart Google TV",
        model: "KD75X85J",
        rating: "5",
        price: "1,199",
        save: "400",
        was: "1,599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465202_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 32 Class Q60A Series QLED 4K UHD Smart Tizen TV",
        model: "QN32Q60AAFXZA",
        rating: "2.9",
        price: "399",
        save: "100",
        was: "499"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451519_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 82 Class Q60T Series LED 4K UHD Smart Tizen TV",
        model: "QN82Q60TAFXZA",
        rating: "4.9",
        price: "1,499",
        save: "500",
        was: "1,999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455216_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SONY - 75 Class BRAVIA XR X90J Series LED 4K UHD Smart Google TV",
        model: "XR75X90J",
        rating: "2.9",
        price: "1,599",
        save: "500",
        was: "2,099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451476_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 65 Class Q70A Series QLED 4K UHD Smart Tizen TV",
        model: "QN65Q70AAFXZA",
        rating: "3.9",
        price: "1,099",
        save: "200",
        was: "1,299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451481_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 55 Class Q80A Series QLED 4K UHD Smart Tizen TV",
        model: "QN55Q80AAFXZA",
        rating: "2.1",
        price: "999",
        save: "200",
        was: "1,199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452319_sd.jpg;maxHeight=300;maxWidth=450",
        name: "SAMSUNG - 65 Class QN85A Series Neo QLED 4K UHD Smart Tizen TV",
        model: "QN65QN85AAFXZA",
        rating: "5",
        price: "1,599",
        save: "300",
        was: "1,899"
    },



]


//adding tv dataBase to localStorage=>

let tv = document.getElementById("TV");
tv.addEventListener("click",addTvData)

function addTvData(){
    // alert();
    
    if(localStorage.getItem("productData") === null){
        localStorage.setItem("productData", JSON.stringify([]))
    }

    localStorage.setItem("productData",JSON.stringify([]));


    let tvArr = JSON.parse( localStorage.getItem("productData"));

   TvDataBase.forEach((el) => {
       tvArr.push(el);
   })

    // console.log(tvArr);

    localStorage.setItem("productData", JSON.stringify(tvArr));

    window.location.href = "../All Pages/productPage.html"

}

/////////////////////////


var laptopDataBase = [

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Ideapad 3 15.6 FHD Touch Screen Laptop - Intel Core i5 11th Gen - 12GB Memory - 256GB SSD - Arctic Grey",
        model: "70UP8070PUA",
        rating: "4.9",
        price: "749",
        save: "250",
        was: "999"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449513_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ASUS - 11.6 Chromebook - Intel Celeron - 4GB Memory - 32GB eMMC Flash Memory - Gray - Grey",
        model: "NS-55F501NA22",
        rating: "4.5",
        price: "399",
        save: "250",
        was: "649"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401727_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Chromebook Duet - 10.1 - Tablet - 128GB - With Keyboard - Ice Blue + Iron Gray",
        model: " UN50TU7000FXZA",
        rating: "4.7",
        price: "379",
        save: "100",
        was: "479"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Abyss Blue with Fabric Cover",
        model: "KD43X80J",
        rating: "4.8",
        price: "449",
        save: "150",
        was: "599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - ENVY 2-in-1 13 Touch- Screen Laptop - Intel Evo Platform Core i5 - 8GB Memory - 256GB SSD - Pale Gold",
        model: "UN65TU7000FXZA",
        rating: "4.8",
        price: "499",
        save: "150",
        was: "649"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - Chromebase 21.5 Touch- Screen All - In - One - Intel Pentium Gold - 4GB Memory - 64GB eMMC - Snowflake White",
        model: " NS-32DF310NA19",
        rating: "4.7",
        price: "149",
        save: "50",
        was: "199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Apple - 21.5 iMac® with Retina 4K display - Intel Core i3(3.6GHz) - 8GB Memory - 256GB SSD - Silver",
        model: "OLED65C1PUB",
        rating: "4.9",
        price: "1,799",
        save: "300",
        was: "2,099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451077_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG 29” UltraWide Full HD HDR Monitor with FreeSync",
        model: "UN50AU8000FXZA",
        rating: "4.9",
        price: "479",
        save: "90",
        was: "569"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - 14 2-In - 1 Touchscreen Chromebook - Intel Core i3 - 8GB Memory - 128GB SSD - Mineral Silver",
        model: "UN40N5200AFXZA",
        rating: "4.9",
        price: "549",
        save: "80",
        was: "629"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426710_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Yoga 7i 2-in-1 14 Touch Screen Laptop - Intel Evo Platform Core i5 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
        model: "70NANO75UPA",
        rating: "4.8",
        price: "899",
        save: "300",
        was: "1,199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455180_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 7 - 16GB Memory - 512GB SSD - Abyss Blue with Fabric Cover",
        model: "120L9G-CINE120A",
        rating: "4.9",
        price: "4,999",
        save: "1000",
        was: "5,999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447818_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ACER  Chromebook Spin 514  Convertible - 14” Full HD Touch  Ryzen 3 3250C 4GB DDR4 Memory  64GB eMMC Flash Memory",
        model: "XR65A80J",
        rating: "4.9",
        price: "1,999",
        save: "300",
        was: "2,299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454254_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Flex 5 13 2-in -1 Chromebook - Pentium 7505 - 4GB Memory - 32GB eMMC - Abyss Blue",
        model: "32S327",
        rating: "4.9",
        price: "199",
        save: "20",
        was: "219"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462556_sd.jpg;maxHeight=300;maxWidth=450",
        name: "GEO - GeoBook 120 Minecraft Edition 12.5-inch HD Laptop - Intel Celeron Quad Core Processor - 4GB Memory - 64GB eMMC - Minecraft Green",
        model: "KD75X85J",
        rating: "4.9",
        price: "1,199",
        save: "400",
        was: "1,599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
        name: "GEO - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Blue",
        model: "QN32Q60AAFXZA",
        rating: "4.9",
        price: "399",
        save: "100",
        was: "499"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462557_sd.jpg;maxHeight=300;maxWidth=450",
        name: "GEO - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Purple",
        model: "QN82Q60TAFXZA",
        rating: "4.9",
        price: "1,499",
        save: "500",
        was: "1,999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426713_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO - Yoga 7i 2-in-1 15.6 HDR Touch Screen Laptop - Intel Evo Platform Core i7 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
        model: "XR75X90J",
        rating: "4.9",
        price: "1,599",
        save: "500",
        was: "2,099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Dell - Inspiron 7000 2-in-1 17 QHD+ Touch - Screen Laptop - Intel Core i7 - NVIDIA - 16GB Memory - 512GB SSD + 32GB Optane - Silver",
        model: "QN65Q70AAFXZA",
        rating: "4.9",
        price: "1,099",
        save: "200",
        was: "1,299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "MICROSOFT - Surface Laptop 4 - 13.5” Touch-Screen  AMD Ryzen™ 5 Surface® Edition  8GB Memory - 128GB SSD (Latest Model) - Platinum",
        model: "QN55Q80AAFXZA",
        rating: "4.9",
        price: "999",
        save: "200",
        was: "1,199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ASUS - ZenBook Flip 15 Q528EH 15.6 Touch- Screen Laptop - Intel Core i7 - 16GB Memory - GTX1650 Max - Q - 512GB SSD - Grey",
        model: "QN65QN85AAFXZA",
        rating: "4.9",
        price: "1,599",
        save: "300",
        was: "1,899"
    },



]

//adding tv dataBase to localStorage=>

let laptopArr = document.getElementById("laptop");
laptopArr.addEventListener("click",addLaptopData)

function addLaptopData(){
    // alert();


    if (localStorage.getItem("productData") === null) {
        localStorage.setItem("productData", JSON.stringify([]))
    }

    localStorage.setItem("productData", JSON.stringify([]));

    let lpArr = JSON.parse(localStorage.getItem("productData"));

    laptopDataBase.forEach((el)=>{
        lpArr.push(el);
    })

    localStorage.setItem("productData", JSON.stringify(lpArr));

    window.location.href = "../All Pages/productPage.html"
}

/////////////////////////


var gameDataBase = [

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408476_sd.jpg;maxHeight=300;maxWidth=450",
        name: "MICROSOFT - Surface Go 2 - 10.5 Touch- Screen - Intel Pentium Gold - 4GB - 64GB SSD - Device Only - Platinum",
        model: "STV-00001",
        rating: "4.9",
        price: "299",
        save: "100",
        was: "399"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408475_sd.jpg;maxHeight=300;maxWidth=450",
        name: "MICROSOFT - Surface Go 2 - 10.5 Touch- Screen - Intel Pentium Gold - 8GB - 128GB SSD - Device Only - Platinum",
        model: "STQ-00001",
        rating: "4.5",
        price: "399",
        save: "150",
        was: "549"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482155_sd.jpg;maxHeight=300;maxWidth=450",
        name: "MICROSOFT - Surface Pro 7+ - 12.3” Touch Screen  Intel Core i5  8GB Memory  128GB SSD with Black Type Cover (Latest Model) - Platinum",
        model: " UN50TU7000FXZA",
        rating: "4.7",
        price: "799",
        save: "230",
        was: "1,029"
    },

    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455181_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LENOVO Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Abyss Blue with Fabric Cover",
        model: "KD43X80J",
        rating: "4.8",
        price: "449",
        save: "150",
        was: "599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465896_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - ENVY 2-in-1 13 Touch- Screen Laptop - Intel Evo Platform Core i5 - 8GB Memory - 256GB SSD - Pale Gold",
        model: "UN65TU7000FXZA",
        rating: "4.8",
        price: "499",
        save: "150",
        was: "649"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465335_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - Chromebase 21.5 Touch- Screen All - In - One - Intel Pentium Gold - 4GB Memory - 64GB eMMC - Snowflake White",
        model: " NS-32DF310NA19",
        rating: "4.7",
        price: "149",
        save: "50",
        was: "199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721812_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Apple - 21.5 iMac® with Retina 4K display - Intel Core i3(3.6GHz) - 8GB Memory - 256GB SSD - Silver",
        model: "OLED65C1PUB",
        rating: "4.9",
        price: "1,799",
        save: "300",
        was: "2,099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451077_sd.jpg;maxHeight=300;maxWidth=450",
        name: "LG 29” UltraWide Full HD HDR Monitor with FreeSync",
        model: "UN50AU8000FXZA",
        rating: "4.9",
        price: "479",
        save: "90",
        was: "569"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458047_sd.jpg;maxHeight=300;maxWidth=450",
        name: "HP - 14 2-In - 1 Touchscreen Chromebook - Intel Core i3 - 8GB Memory - 128GB SSD - Mineral Silver",
        model: "UN40N5200AFXZA",
        rating: "4.9",
        price: "549",
        save: "80",
        was: "629"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426710_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Lenovo - Yoga 7i 2-in-1 14 Touch Screen Laptop - Intel Evo Platform Core i5 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
        model: "70NANO75UPA",
        rating: "4.8",
        price: "899",
        save: "300",
        was: "1,199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455180_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Lenovo Yoga 6 13 2-in-1 13.3 Touch Screen Laptop - AMD Ryzen 7 - 16GB Memory - 512GB SSD - Abyss Blue with Fabric Cover",
        model: "120L9G-CINE120A",
        rating: "4.9",
        price: "4,999",
        save: "1000",
        was: "5,999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447818_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ACER  Chromebook Spin 514  Convertible - 14” Full HD Touch  Ryzen 3 3250C 4GB DDR4 Memory  64GB eMMC Flash Memory",
        model: "XR65A80J",
        rating: "4.9",
        price: "1,999",
        save: "300",
        was: "2,299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454254_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Lenovo - Flex 5 13 2-in -1 Chromebook - Pentium 7505 - 4GB Memory - 32GB eMMC - Abyss Blue",
        model: "32S327",
        rating: "4.9",
        price: "199",
        save: "20",
        was: "219"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462556_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Geo - GeoBook 120 Minecraft Edition 12.5-inch HD Laptop - Intel Celeron Quad Core Processor - 4GB Memory - 64GB eMMC - Minecraft Green",
        model: "KD75X85J",
        rating: "4.9",
        price: "1,199",
        save: "400",
        was: "1,599"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462558_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Geo - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Blue",
        model: "QN32Q60AAFXZA",
        rating: "4.9",
        price: "399",
        save: "100",
        was: "499"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462557_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Geo - GeoBook 120 12.5-inch HD Laptop - Intel Celeron Dual Core Processor - 4GB Memory - 64GB eMMC - Purple",
        model: "QN82Q60TAFXZA",
        rating: "4.9",
        price: "1,499",
        save: "500",
        was: "1,999"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426713_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Lenovo - Yoga 7i 2-in-1 15.6 HDR Touch Screen Laptop - Intel Evo Platform Core i7 - 12GB Memory - 512GB Solid State Drive - Dark Moss",
        model: "XR75X90J",
        rating: "4.9",
        price: "1,599",
        save: "500",
        was: "2,099"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=300;maxWidth=450",
        name: "Dell - Inspiron 7000 2-in-1 17 QHD+ Touch - Screen Laptop - Intel Core i7 - NVIDIA - 16GB Memory - 512GB SSD + 32GB Optane - Silver",
        model: "QN65Q70AAFXZA",
        rating: "4.9",
        price: "1,099",
        save: "200",
        was: "1,299"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477089_sd.jpg;maxHeight=300;maxWidth=450",
        name: "MICROSOFT - Surface Laptop 4 - 13.5” Touch-Screen  AMD Ryzen™ 5 Surface® Edition  8GB Memory - 128GB SSD (Latest Model) - Platinum",
        model: "QN55Q80AAFXZA",
        rating: "4.9",
        price: "999",
        save: "200",
        was: "1,199"
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436222_sd.jpg;maxHeight=300;maxWidth=450",
        name: "ASUS - ZenBook Flip 15 Q528EH 15.6 Touch- Screen Laptop - Intel Core i7 - 16GB Memory - GTX1650 Max - Q - 512GB SSD - Grey",
        model: "QN65QN85AAFXZA",
        rating: "4.9",
        price: "1,599",
        save: "300",
        was: "1,899"
    },



]

//adding tv gameDataBase to localStorage=>

let gameArr = document.getElementById("game");
gameArr.addEventListener("click", addGameData)

function addGameData() {
    // alert();


    if (localStorage.getItem("productData") === null) {
        localStorage.setItem("productData", JSON.stringify([]))
    }

    localStorage.setItem("productData", JSON.stringify([]));

    let gmArr = JSON.parse(localStorage.getItem("productData"));

    gameDataBase.forEach((el) => {
        gmArr.push(el);
    })

    localStorage.setItem("productData", JSON.stringify(gmArr));

    window.location.href = "../All Pages/productPage.html"
}

/////////////////////////




// searchRes=>

let totalDBArr = [];

TvDataBase.forEach((el) => {
    totalDBArr.push(el);
})

gameDataBase.forEach((el) => {
    var sid = 0;

    totalDBArr.forEach((p) => {

        if (el.name == p.name) {
            sid++;
        }
    })

    if (sid == 0) {
        totalDBArr.push(el);

    }

})



laptopDataBase.forEach((el) => {

    var patil = 0;

    totalDBArr.forEach((p) => {

        if (el.name == p.name) {
            patil++;
        }
    })

    if (patil == 0) {
        totalDBArr.push(el);
    }


})
// console.log(totalDBArr)

if (localStorage.getItem("totalData") == null) {
    localStorage.setItem("totalData", JSON.stringify([]));
}

// let totArr = JSON.parse(localStorage.getItem("totalData"));

localStorage.setItem("totalData", JSON.stringify(totalDBArr));


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
 
    window.location.href = "../All Pages/productDescPage.html"

}



// saveItems=>

if(localStorage.getItem("Save") == null){
    localStorage.setItem("Save",JSON.stringify([]))
}
let savedIArray5 = JSON.parse(localStorage.getItem("Save"));

// console.log(savedIArray);

if (savedIArray5.length>0){

    

savedIArray5.forEach((prod)=>{

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
                priceDiv.textContent = "$"+ prod.price
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

}




// Linking Pages=>



let signUpPage = document.getElementById("signUp");

signUpPage.addEventListener("click", () => {
    window.location.href = "SignUp.html"
});

let returnToHome = document.getElementById("return");
returnToHome.addEventListener("click", () => {
    window.location.href = "../index.html"
})

let goHome = document.getElementById("logo");
goHome.addEventListener('click',()=>{
    window.location.href = "../index.html"
})

//adding Functionality=>


let login = document.getElementById("createA");

login.addEventListener("click",Login);

async function Login(){


    let userinfo = {

        username: document.getElementById("Username").value,
        password: document.getElementById("Password").value
    }


    let userInfo = JSON.stringify(userinfo);

    let url = `https://masai-api-mocker.herokuapp.com/auth/login`;


    let res = await fetch(url, {

        method: "POST",
        body: userInfo,

        headers: {
            "Content-Type": "application/json"
        }

    })

    let data = await res.json();
    // console.log(data);

    let userI = JSON.parse(userInfo);

    fetchMyData(userI.username, data.token);
}



async function fetchMyData(usName, token) {

        let url1 = `https://masai-api-mocker.herokuapp.com/user/${usName}`;

        let resp = await fetch(url1, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }

        })

        let MyData = await resp.json();
        console.log(MyData);

        if (MyData.name == "") {
            alert("please fill valid details")
        } else {

            if (localStorage.getItem("userName") === null) {
                localStorage.setItem("userName", JSON.stringify([]));
            }

            let nameArr = JSON.parse(localStorage.getItem("userName"));

            nameArr.push(MyData.name);
            console.log(nameArr);

            localStorage.setItem("userName", JSON.stringify(nameArr));
            window.location.href = "../index.html";
        }

}
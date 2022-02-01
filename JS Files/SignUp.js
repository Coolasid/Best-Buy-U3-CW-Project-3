// Linking Pages=>

let signInPage = document.getElementById("signIn");

signInPage.addEventListener("click",() =>{
    window.location.href = "SignIn.html"
});

let returnToHome = document.getElementById("return");
returnToHome.addEventListener("click", () =>{
    window.location.href = "../index.html"
})

let goHome = document.getElementById("logo");
goHome.addEventListener('click', () => {
    window.location.href = "../index.html"
})


//adding Functionality=>

let createAcc = document.getElementById("createA");
createAcc.addEventListener("click", createA);



 async function createA(){
    // alert();

    let userData = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        password: document.getElementById("Password").value,
        username: document.getElementById("Username").value,
        mobile: document.getElementById("Mobile").value,
        description: document.getElementById("description").value

    }


     let userInfo = JSON.stringify(userData);
    //  console.log(userInfo);

     let registerApi = `https://masai-api-mocker.herokuapp.com/auth/register`



     let res = await fetch(registerApi, {

         method: "POST",
         body: userInfo,

         headers: {
             'Content-Type': "application/json",
         },

     });

     let data = await res.json();
     console.log(data);

     
     if (data.error == false) {
         window.location.href = "SignIn.html";
     } else if (data.error == true) {
         alert("You have already an Account")
     }



}
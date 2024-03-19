let cvbtn=document.getElementById("cvbtn");
let summit=document.getElementById("submit");
let bar=document.getElementById("bar");

cvbtn.addEventListener("click",function(){
    alert("Download successfully");
})

summit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if(email.value=="" && pass.value==""){
        alert("Fill Detail");
    }
    else{
        alert("Logged in");
    }
})

let ul=document.querySelector("ul");
bar.addEventListener("click",function(){
    ul.classList.toggle("showData");
    if(ul.className=="showData"){
        bar.className="fa-solid fa-xmark"
    }
    else{
        bar.className="fa-solid fa-bars"
    }
})
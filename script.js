// autocomplete typed
const typed = new Typed(".text", {
    strings:["Frontend Developer" , "Web Designer" ,  "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// view my_cv
const myCv =  document.querySelector("#btn-cv");
myCv.addEventListener('click', () => {
    const viewer = window.open('/docs/peter-mwaniki-CV.pdf', target="_self");
    return viewer;
});

// copyright date
const d = new Date();
const cDate = document.querySelector(".date").innerHTML = d.getFullYear();

// scroll
const backTop = document.querySelector(".top");
window.addEventListener("scroll", (e) =>{
    if (this.pageYOffset > 2500) {
        backTop.style.visibility = "visible";
    }else{
        backTop.style.visibility = "hidden";      

    }
})

// sendemail
function sendEmail() {
   const params = {
      name:  document.getElementById("name").value,
      email:  document.getElementById("email").value,
      message:  document.getElementById("message").value,
   };

   const serviceID = "service_61cyj4b";
const templateID = "template_8a40qki";

emailjs.send(serviceID, templateID,params)
.then(
   (res) =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    });
}

// open-close nav 
const nav = document.querySelector(".navBar2");
const menu = document.querySelector(".menu");
const closeNav = document.querySelector(".closeNav");
const navContainer = document.querySelector(".navContainer a");

menu.addEventListener('click', ()=>{
    nav.style.display = "block";
});
closeNav.addEventListener('click', ()=>{
    nav.style.display = "none";
});
navContainer.forEach(a => {
     a.onclick(()=>{
        nav.style.display = "none";
     })
});


let navBtn = document.querySelector("nav #right"),
    navBtn2 = document.querySelector("nav #down"),
    navList = document.querySelector("nav ul");
navBtn.addEventListener('click',()=>{
    navBtn2.style.display="block";
    navBtn.style.display="none"
    navList.classList.add("list-visibility");
},false);
navBtn2.addEventListener('click',()=>{
    navBtn.style.display="block";
    navBtn2.style.display="none";
    navList.classList.remove("list-visibility");
},false);
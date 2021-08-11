let creations = document.querySelectorAll('#creations div'),
    navBtn = document.querySelector("nav #right"),
    navBtn2 = document.querySelector("nav #down"),
    navList = document.querySelector("nav ul"),
    images=document.querySelectorAll('#images img');
creations[0].style.backgroundImage=`url(../images/desktop/image-curiosity.jpg.jpg)`;
creations[1].style.backgroundImage=`url(../images/desktop/image-pocket-borealis.jpg.jpg)`;
creations[2].style.backgroundImage=`url(../images/desktop/image-soccer-team.jpg.jpg)`;
creations[3].style.backgroundImage=`url(../images/desktop/image-deep-earth.jpg.jpg)`;
creations[4].style.backgroundImage=`url(../images/desktop/image-fisheye.jpg)`;
creations[5].style.backgroundImage=`url(../images/desktop/image-from-above.jpg)`;
creations[6].style.backgroundImage=`url(../images/desktop/image-grid.jpg)`;
creations[7].style.backgroundImage=`url(../images/desktop/image-night-arcade.jpg)`;
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
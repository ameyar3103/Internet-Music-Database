let navbardiv=[];
navbardiv[0]=document.querySelector(".containerh");
navbardiv[1]=document.querySelector(".container");
navbardiv[2]=document.getElementById("about");
navbardiv[3]=document.getElementById("search");
navbardiv[4]=document.getElementById("spotlight");
let original='';
navbardiv[0].addEventListener('mouseover',()=>{
    original=navbardiv[0].style.backgroundColor;
    navbardiv[0].style.backgroundColor="black";
});
navbardiv[0].addEventListener('mouseout',()=>{
   navbardiv[0].style.backgroundColor=original;
   original='';
});
navbardiv[1].addEventListener('mouseover',()=>{
    original=navbardiv[1].style.backgroundColor;
    navbardiv[1].style.backgroundColor="black";
});
navbardiv[1].addEventListener('mouseout',()=>{
   navbardiv[1].style.backgroundColor=original;
   original='';
});
navbardiv[2].addEventListener('mouseover',()=>{
    original=navbardiv[2].style.backgroundColor;
    navbardiv[2].style.backgroundColor="black";
});
navbardiv[2].addEventListener('mouseout',()=>{
   navbardiv[2].style.backgroundColor=original;
   original='';
});
navbardiv[3].addEventListener('mouseover',()=>{
    original=navbardiv[3].style.backgroundColor;
    navbardiv[3].style.backgroundColor="black";
});
navbardiv[3].addEventListener('mouseout',()=>{
   navbardiv[3].style.backgroundColor=original;
   original='';
});
navbardiv[4].addEventListener('mouseover',()=>{
    original=navbardiv[4].style.backgroundColor;
    navbardiv[4].style.backgroundColor="black";
});
navbardiv[4].addEventListener('mouseout',()=>{
   navbardiv[4].style.backgroundColor=original;
   original='';
});
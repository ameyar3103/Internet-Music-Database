let alldivs=document.querySelectorAll('.navi-div');
let original='';
for(let i=0;i<6;i++){
    alldivs[i].addEventListener('mouseover',()=>{
        original=alldivs[i].style.backgroundColor;
        alldivs[i].style.backgroundColor="gray";
    });
    alldivs[i].addEventListener('mouseout',()=>{
        alldivs[i].style.backgroundColor=original;
        original='';
    });
}
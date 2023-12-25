let addButton1=document.querySelector('.add1');
addButton1.addEventListener('click',()=>{
    var data=document.querySelector('.song1').innerHTML;
    var album=document.querySelector('.album-name').innerHTML;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","/add-song");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify({song:data,albumname:album}));
    alert('Song has been added successfully!');
});
let addButton2=document.querySelector('.add2');
addButton2.addEventListener('click',()=>{
    var data=document.querySelector('.song2').innerHTML;
    var album=document.querySelector('.album-name').innerHTML;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","/add-song");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify({song:data,albumname:album}));
    alert('Song has been added successfully!');
});
let addButton3=document.querySelector('.add3');
addButton3.addEventListener('click',()=>{
    var data=document.querySelector('.song3').innerHTML;
    var album=document.querySelector('.album-name').innerHTML;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","/add-song");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify({song:data,albumname:album}));
    alert('Song has been added successfully!');
});
let addButton4=document.querySelector('.add4');
addButton4.addEventListener('click',()=>{
    var data=document.querySelector('.song4').innerHTML;
    var album=document.querySelector('.album-name').innerHTML;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","/add-song");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify({song:data,albumname:album}));
    alert('Song has been added successfully!');
});
let addButton5=document.querySelector('.add5');
addButton5.addEventListener('click',()=>{
    var data=document.querySelector('.song5').innerHTML;
    var album=document.querySelector('.album-name').innerHTML;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","/add-song");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify({song:data,albumname:album}));
    alert('Song has been added successfully!');
});
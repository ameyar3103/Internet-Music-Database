let removeButt=document.querySelectorAll('.rmv')
for(let i=0;i<removeButt.length;i++){
removeButt[i].addEventListener('click',()=>{
    console.log(removeButt[i].value)
    data=removeButt[i].value
    var xhr=new XMLHttpRequest();
    xhr.open("POST","/delete");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify({song:data}));
    window.location.reload()
});
}
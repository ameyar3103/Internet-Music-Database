let item='';
function searchitemcol(){
    item = document.querySelector('.searchbar').value;
    console.log(item);
    item = item.replace(' ','+');
}
let time=10;
function gettimelimit(){
    time=Number(document.querySelector('.time-filter').value);
    time = time * 60000;
}
function resetFilter(){
    time=10;
    document.querySelector('.time-filter').value='';
    document.querySelector('.check-box').checked=false;
}
document.querySelector('.reset').addEventListener('click',()=>{
    resetFilter();
});
let resultObj='';
let obtainedResult={};
let jsonString='';
function max(value){
    if(value>=10)
    return 10;
    else
    return value;
}
function search_call(){
    resultObj = "https://itunes.apple.com/search?term="+item;
    function httpGetAsync( url ,callback){
    let xmlhttpreq=new XMLHttpRequest();
    xmlhttpreq.onreadystatechange = function(){
        if(xmlhttpreq.readyState==4 && xmlhttpreq.status==200)
        callback(xmlhttpreq.responseText);
    };
    xmlhttpreq.open("GET",url,true);
    xmlhttpreq.send(null);
}
    httpGetAsync(resultObj,function(result){
        obtainedResult=JSON.parse(result);
    });
}
document.querySelector('.searchbutton').addEventListener('click',()=>{
    document.querySelector('.results').innerHTML='';
    searchitemcol();
    search_call();
    document.querySelector('.results').innerHTML='';
    searchitemcol();
    search_call();
    if(document.querySelector('.time-filter').value=='' && (!document.querySelector('.check-box').checked)){
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
    } 
    }
},2000);
}
else if(document.querySelector('.time-filter').value!='' && (!document.querySelector('.check-box').checked))
{
    gettimelimit();
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        if(Number(obtainedResult.results[i].trackTimeMillis)<=time){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
        }
    }
    time=10;
    }
},2000);
}
else if(document.querySelector('.time-filter').value=='' && document.querySelector('.check-box').checked){
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        if(obtainedResult.results[i].trackExplicitness!="explicit"){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
        }
    }
    }
},2000);
}
else{
    gettimelimit();
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        if(obtainedResult.results[i].trackExplicitness!="explicit" && Number(obtainedResult.results[i].trackTimeMillis)<=time){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
        }
    }
    time=10;
    }
},2000);
}
});
document.querySelector('.results').innerHTML='';
document.querySelector('.searchbar').addEventListener('keypress',function(event){
    if(event.key=='Enter'){
    document.querySelector('.results').innerHTML='';
    searchitemcol();
    search_call();
    if(document.querySelector('.time-filter').value=='' && (!document.querySelector('.check-box').checked)){
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
    }
    }
},2000);
}
else if(document.querySelector('.time-filter').value!='' && (!document.querySelector('.check-box').checked))
{
    gettimelimit();
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        if(Number(obtainedResult.results[i].trackTimeMillis)<=time){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
        }
    }
    time=11;
    }
},2000);
}
else if(document.querySelector('.time-filter').value=='' && document.querySelector('.check-box').checked){
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        if(obtainedResult.results[i].trackExplicitness!="explicit"){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
        }
    }
    }
},2000);
}
else{
    gettimelimit();
    setTimeout(()=>{if(item=='' || obtainedResult.resultCount==0){
        document.querySelector('.results').innerHTML += 'No results found!';
    }
    else{
    document.querySelector('.results').innerHTML += '<p>Following are the results of your search :</p>';
    console.log(obtainedResult);
    for(let i=0;i<max(obtainedResult.resultCount);i++){
        if(obtainedResult.results[i].trackExplicitness!="explicit" && Number(obtainedResult.results[i].trackTimeMillis)<=time){
        document.querySelector('.results').innerHTML += `<div style="flex:1;display:flex; flex-direction:row;"><div style="flex:1;"><img src=${obtainedResult.results[i].artworkUrl100}></div><div style="flex:2;vertical-align:middle;color:white !important; text-decoration:none !important;"><a style="color:white;text-decoration:none;cursor:pointer;">${obtainedResult.results[i].trackName}</a></div><div style="flex:1;vertical-align:middle; font-size:20px;">By ${obtainedResult.results[i].artistName}</div><div style="flex:2;"><audio controls><source src=${obtainedResult.results[i].previewUrl} type="audio/mp3"></audio></div></div>`;
        }
    }
    time=11;
    }
},2000);
}
    }
});



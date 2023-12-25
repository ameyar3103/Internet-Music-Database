let widthimg=document.querySelector('.effimg').style.width;
widthimg=widthimg.replace('px','');
widthimg=Number(widthimg);
let heightimg=document.querySelector('.effimg').style.height;
heightimg=heightimg.replace('px','');
heightimg=Number(heightimg);
let count=0;
let flag=0;
function zoominout(){
    setInterval(()=>{
        if(heightimg>=250 && widthimg>=250 && flag==0 && count<=20){
        flag=0;
        widthimg=widthimg-10;
        document.querySelector('.effimg').style.width=`${widthimg}px`;
        heightimg=heightimg-6;
        document.querySelector('.effimg').style.height=`${heightimg}px`;
        count++;
        }
        else if(heightimg<=300 && widthimg<=500 && count<=20){
            flag=1;
            widthimg=widthimg+10;
            document.querySelector('.effimg').style.width=`${widthimg}px`;
            heightimg=heightimg+6;
            document.querySelector('.effimg').style.height=`${heightimg}px`;
            if(heightimg>300 || widthimg>500){
                flag=0;
            }
        }
        else{

        }
    },75);
}
zoominout();
let reviewDict={
    user:'',
    review:'',
    stars:''
};
let submitButton=document.querySelector('.submit');
submitButton.addEventListener('click',()=>{
    reviewDict.user=document.querySelector('.searchbar').value;
    reviewDict.review=document.querySelector('.reviewbar').value;
    var set=document.getElementsByName('rating');
    for(let i=0;i<set.length;i++){
        if(set[i].checked)
        reviewDict.stars=set[i].value;
        set[i].checked=false;
    }
    if(reviewDict.user=='' || reviewDict.review=='' || reviewDict.stars==''){
        alert('All fields need to have an input!');
    }
    else{
        document.querySelector('.form-input').innerHTML += `<tr><td>${reviewDict.user}</td><td>${reviewDict.review}</td><td>${reviewDict.stars}</td></tr>`;
    }
    document.querySelector('.searchbar').value='';
    document.querySelector('.reviewbar').value='';
    // document.getElementsByName('rating').checked=false;
});
var countDownDate=new Date("Jun 30, 2023 00:00:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.querySelector('.next').innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.next').innerHTML = "EXPIRED";
    }
  }, 1000);

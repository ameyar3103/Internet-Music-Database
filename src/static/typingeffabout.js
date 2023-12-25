let ashwin=['Name: Ashwin Kumar','Email: ashwin.kumar@students.iiit.ac.in','Age: 19','Interested in cricket,aeronautics and computer science.'];
let ameya=['Name: Ameya Rathod','Email: ameya.rathod@research.iiit.ac.in','Age: 19','Interested in mathematics, computer science and music.'];
document.querySelector('.info1').innerHTML='';
document.querySelector('.info2').innerHTML='';
let i=0;
let j=0;
function typingeffectAshwin(){
        setInterval(()=>{
            if(j<ashwin[i].length && i<ashwin.length){
            document.querySelector('.info1').innerHTML += ashwin[i].charAt(j);
            j++;
            }
            else if(i<ashwin.length && j==ashwin[i].length){
                document.querySelector('.info1').innerHTML += '<br>';
                i++;
                j=0;
            }
            else if(i==ashwin.length){

            }
        },50);
}
let m=0;
let n=0;
function typingeffectAmeya(){
    setInterval(()=>{
        if(n<ameya[m].length && m<ameya.length){
        document.querySelector('.info2').innerHTML += ameya[m].charAt(n);
        n++;
        }
        else if(m<ameya.length && n==ameya[m].length){
            document.querySelector('.info2').innerHTML += '<br>';
            m++;
            n=0;
        }
        else if(m==ameya.length){

        }
    },50);
}
typingeffectAshwin();
typingeffectAmeya();
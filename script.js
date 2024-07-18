//  step--1......
 
 // var Clutter="";
// for(var i=1;i<=168;i++){
//     var rn=Math.floor(Math.random()*10)
//     Clutter += `<div class="bubble">${rn}</div>`;
// }
// document.querySelector('#pbtm').innerHTML=Clutter;





// var point='';
// for(var i=1;i<=165;i++){
//    var rn= Math.floor(Math.random()*10)
//    point +=`<div class="bubble">${rn}</div>`;
// }
// document.querySelector('#pbtm').innerHTML=point;



function makeBubble(){
    var number='';
for(var i=1;i<=210;i++){
    var go =Math.floor(Math.random()*10)
    number += `<div class='bubble'>${go}</div>`
}
document.querySelector('#pbtm').innerHTML=number;
}
makeBubble();



// step----2.......



// var timer=60;
// function runTimer(){
//   var timerint=setInterval(function() {
//         if(timer > 0){
//             timer--;
//     document.querySelector('#timerval').textContent=timer;
//         }else{
//             ClearInterval(timerint);
//         }
//     },1000);
// }
// runTimer();




// var timer=60;
// function gotimer(){
//     var timerint=setInterval(()=>{
//         if(timer>0){
//             timer--;
//             document.querySelector('#timerval').textContent=timer;
//         }else{
//             clearInterval(timerint)
//         }
//     },1000)
// }
// gotimer();


var timer=60;
function outTimer(){
    var timerint = setInterval(()=>{
        if(0<timer){
            timer--;
            document.querySelector('#timerval').textContent=timer;
        }else{
            clearTimeout(timerint);
            document.querySelector('#pbtm').innerHTML=`<h1>Game is Over</h1>`;
        }
    },1000)
}
outTimer()




// step----3......


// function getHit(){
//     var rn= Math.floor(Math.random()*10);
//     document.querySelector('#hitval').textContent=rn
// }
// getHit()

var hitrn=0;

function getHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=hitrn;
}
getHit();




// setp---4




var score=0;
function increaseScore(){
    score +=10;
    document.querySelector('#Scorebal').textContent=score;
}
// increaseScore()


// step----5......

document.querySelector('#pbtm')
.addEventListener('click',(dets)=>{
    var clickdnum=Number(dets.target.textContent);
    // console.log(clickdnum)

    if(hitrn===clickdnum){
        increaseScore();
        makeBubble();
        getHit();

    }else{

    }
}
   

)
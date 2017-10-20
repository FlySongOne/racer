//window.onload = function() {
  /* write your code here */
/*
document.addEventListener('DOMContentLoaded', () => {
    // when start button is clicked, screen shows are you ready?
    var buttEle = document.querySelector('button');
    buttEle.addEventListener('click',function(){
    document.querySelector('#screen').innerHTML = "Are You Ready?";

   })
    // when right arrow or z button is pressed, class race1 and race2
    // are added to racer1 and racer2 id elements. After 2.5 seconds,
    // prints out who wins. I set time for animation 2 sec for mustang,
    // so I input "mustang wins" ininnerHTML
    document.addEventListener('keyup',(event)=> {
    if(event.keyCode === 39 || event.keyCode === 90){
      document.querySelector('#racer1').setAttribute('class','race1');
       document.querySelector('#racer2').setAttribute('class','race2');
       document.querySelector('#screen').innerHTML = "Go!";
       setTimeout(function(){
          document.querySelector('#screen').innerHTML = "Mustang Wins!"
         }, 2500);
    }
    })

//};})
});
*/
window.onload = function() {
   const buttEle = document.querySelector('button');
   const racer1 = document.querySelector('#racer1');
   const racer2 = document.querySelector('#racer2');
   let screenEle = document.querySelector('#screen');
   var leftMarginRC1 = 0;
   var leftMarginRC2 = 0;

   buttEle.addEventListener('click',function play(){
   screenEle.innerHTML = "Are You Ready?";

   document.addEventListener('keyup',(event)=>{
   run(event);
   screenEle.innerHTML = "Go Go!";
   winner();

   })

   })

    function run(event){
      if(leftMarginRC1 < 1300 && leftMarginRC2 < 1300){
        if(event.keyCode === 90 ){
           racer1.style.marginLeft = leftMarginRC1+"px";
           leftMarginRC1 += 40;

        }else if(event.keyCode === 39){
           racer2.style.marginLeft = leftMarginRC2+"px";
           leftMarginRC2 += 40;

        }
      }
   }
    function winner(){
        if(leftMarginRC1 >= 1300 && leftMarginRC2 < 1300 ){
           screenEle.innerHTML = "Camaro Wins!";
        }else if(leftMarginRC2 >= 1300 && leftMarginRC1 < 1300){
           screenEle.innerHTML = "Mustang Wins";
        }

    }

};

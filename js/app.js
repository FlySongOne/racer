
window.onload = function() {
  // button element
  const buttEle = document.querySelector('button');
  // racer1 element
  const racer1 = document.querySelector('#racer1');
  // racer2 element
  const racer2 = document.querySelector('#racer2');
  // screen element
  let screenEle = document.querySelector('#screen');
  // leftmargin1 for racer 1 and leftmargin 2 for racer2
  // the variables used to set maginLeft for both racers
  var leftMarginRC1 = 0;
  var leftMarginRC2 = 0;

  //when start button is clicked, screen shows 'are you ready?'
  buttEle.addEventListener('click',function play(){
    screenEle.innerHTML = "Are You Ready?";

    // whenever keys are pressed, function run and function winner are called
    // each time a key is pressed, run function moves racer to right and
    // winner function checks who wins the game.
    document.addEventListener('keyup',(event)=>{
      run(event);
      screenEle.innerHTML = "Go Go!";
      winner();

    })

  })

  // function run takes parameter 'event' which is the user's key press.
  // keycode 90 is z and 39 is arrow right. whenver users press keys,
  // function run is called and set racers' left margin plus 40px
  // by adding 40 px to leftMargin, racers move to right.
  function run(event){
    // left margin is added until 1300 px.
    if(leftMarginRC1 < 1300 && leftMarginRC2 < 1300){
      // if z is pressed, racer1's marginleft increases
      // and racer1 moves to right 40px
      if(event.keyCode === 90 ){
        racer1.style.marginLeft = leftMarginRC1+"px";
        leftMarginRC1 += 40;
      // if arrow right is pressed, racer2's marginleft increases
      // and racer2 moves to right 40px
      }else if(event.keyCode === 39){
        racer2.style.marginLeft = leftMarginRC2+"px";
        leftMarginRC2 += 40;

      }
    }
  }

  // winner function checks leftmargin number and see if it is
  // over 1300 px, if it is over 1300 px, it changes screenElement's inner
  // html value to winner's car model.
  function winner(){
    if(leftMarginRC1 >= 1300 && leftMarginRC2 < 1300 ){
      screenEle.innerHTML = "Camaro Wins!";
    }else if(leftMarginRC2 >= 1300 && leftMarginRC1 < 1300){
      screenEle.innerHTML = "Mustang Wins";
    }

  }

};

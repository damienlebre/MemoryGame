
let card = document.querySelectorAll('.cardBack');
//    console.log(card)  
   
   card.forEach(card => {
    card.addEventListener("click", function(e) {
        card.className = "cardReturn";
        // console.log(card);
        var rand = Math.floor(Math.random()*faceCardArray.length);
        var rValue = faceCardArray[rand];
        console.log(rValue.src);
        card.src = rValue.src;
    });
   });

   var faceCardArray = new Array();

   faceCardArray[0] = new Image();
   faceCardArray[0].src = 'images/images/1.png';
   
   faceCardArray[1] = new Image();
   faceCardArray[1].src = 'images/images/2.png';
   
   faceCardArray[2] = new Image();
   faceCardArray[2].src = 'images/images/3.png';
   
   faceCardArray[3] = new Image();
   faceCardArray[3].src = 'images/images/4.png';
   
   faceCardArray[4] = new Image();
   faceCardArray[4].src = 'images/images/5.png';
   
   faceCardArray[5] = new Image();
   faceCardArray[5].src = 'images/images/6.png';

   faceCardArray[6] = new Image();
   faceCardArray[6].src = 'images/images/7.png';

   faceCardArray[7] = new Image();
   faceCardArray[7].src = 'images/images/8.png';

   faceCardArray[8] = new Image();
   faceCardArray[8].src = 'images/images/9.png';

   faceCardArray[9] = new Image();
   faceCardArray[9].src = 'images/images/10.png';

   faceCardArray[10] = new Image();
   faceCardArray[10].src = 'images/images/11.png';

   faceCardArray[11] = new Image();
   faceCardArray[11].src = 'images/images/12.png';

   faceCardArray[11] = new Image();
   faceCardArray[11].src = 'images/images/13.png';

   faceCardArray[12] = new Image();
   faceCardArray[12].src = 'images/images/14.png';

//    console.log(faceCardArray[12].src)
   
   function flipcard(){
    // let cardReturns = document.querySelectorAll('.cardreturn');

    cardReturns.forEach(cardReturn => {   
     console.log('test');
     var rand = Math.floor(Math.random()*faceCardArray.length);
     var rValue = faceCardArray[rand];
     console.log(rValue);
     cardReturn.src = rValue;    
 });
   }
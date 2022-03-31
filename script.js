// function changeClass(){
// let name = document.getElementById("grid-item")
// name.className="cardFace"
// }

let card = document.getElementById('grid-item');
      
card.addEventListener("click", function(e) {
    card.className = "cardReturn"
});

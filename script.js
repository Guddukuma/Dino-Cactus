

let dino = document.getElementById("dino");

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add('jump');
        setTimeout(function(){
            dino.classList.remove('jump');
        }, 300)  
    }
}
// function left(){
//     if(cactus.classList != "left"){
//         catus.classList.add('left');
//         setTimeout(function(){
//             cactus.classList.add('left');
//         }, 300)
//     }
// }
setInterval(function(){
    let dinoTop = parseFloat(window.getComputedStyle(dino).getPropertyValue("top"));
        // console.log(dinoTop);
        let cactusleft = parseFloat(window.getComputedStyle(cactus).getPropertyValue("left"));
        // console.log(cactusleft);
        if(dinoTop>=150 && cactusleft >= 0 && cactusleft <= 50){
            alert("Game Over");
        }
}, 10)


document.addEventListener('keydown', jump);
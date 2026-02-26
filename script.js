document.addEventListener("DOMContentLoaded", () => {

  let  animals = document.querySelectorAll(".animal");
    console.log(animals)
    const sonCameleon = new Audio('media/audio/cameleon.mp3');
    const sonElephant = new Audio('media/audio/elephant.mp3');
    const sonRenard = new Audio('media/audio/renard.mp3');
    const sonSerpent = new Audio('media/audio/serpent.mp3');


    function parle(){
        let  animals = [sonCameleon, sonElephant, sonRenard, sonSerpent ];
        const nombreHasard = Math.floor(Math.random() * 4);
        console.log(animals[nombreHasard].play())
    }
    parle();


   









}); 
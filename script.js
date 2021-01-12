const holes = $(".hole");// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $(".score");//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $(".mole");// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

let score = 0;

function startGame() {
    let timer = 10;
    function timeFunc() {
        setTimeout(function () {
            let time = Math.floor((Math.random() * (600))) + 200;
            let elem = $(".mole").get()[Math.trunc(Math.random() * $(".mole").get().length)];
            if(!$(elem).attr("class").includes("active")){
                $(elem).addClass("active");
                $(elem).addClass("up");
                $(elem).animate({
                    top: "20%",
                }, time)
                    .animate({
                        top: "100%",
                    }, time);
                setTimeout(function(){$(elem).removeClass("active")},time*2);

            };
            if(timer >0){
                timeFunc();
            }
        },Math.floor(Math.random() * 2000) + 500);
    }

    function timerChange(){
        setTimeout(function (){
            timer--;
            if(timer > 0){
                timerChange();
            }
            console.log(timer);
        },1000)
    }
    timeFunc();
    timerChange();
}


document.getElementById("startGame").addEventListener("click",startGame);

moles.click(() => {
    score++;
    $(this).removeClass("up");
    document.getElementsByClassName("score")[0].innerHTML = score;
});
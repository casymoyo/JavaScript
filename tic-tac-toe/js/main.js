let form_one = document.getElementById('player-one')
let start_btn = document.querySelector('.start');
let player_one = document.querySelector('.player-one');
let player_two = document.querySelector('.player-two');
let main_game = document.querySelector('.main-game');
let data = document.querySelectorAll('.data');
let results = document.getElementById('results');

let player_one_name;
let player_two_name;

function start(){
    start_btn.classList.add('dont-show');
    player_one.style.display="block";
}

function player_1_name(){
    player_one_name = document.getElementById('player-one-name').value;
    console.log(player_one_name);
}

function next_player(){
    player_one.style.display="none";
    player_two.classList.add('show');
}

function player_2_name(){
    player_two_name = document.getElementById('player-two-name').value;
    console.log(player_two_name);
}

function new_game(){
    main_game.style.display="none";
    start();
}

function reset_game(){
    for(let i = 0; i < data.length; i++){
        data[i].innerHTML = " ";
    }

    results.textContent=""
    console.log(results)
}

function start_game() {
    let versus = document.getElementById('versus')

    let flag = 1;

    versus.textContent = player_one_name + ' ' + 'Vs' + ' ' + player_two_name;
    player_two.classList.remove('show');
    main_game.style.display="grid";
   
    for(let i = 0; i < data.length; i++){
        data[i].addEventListener(
            'click', function(){
                if(flag == 1){
                    data[i].textContent = "X";
                    data[i].style.color="red";
                    data[i].disabled = true;
                    flag = 0;
                }
                else{
                    data[i].textContent = "O";
                    data[i].disabled = true;
                    flag = 1;
                }
                check_results();
            }
        )
    }
    
   
}

function check_results() {
    let d1, d2, d3, d4, d5, d6, d7, d8, d9;
    d1 = document.getElementById("d1").innerHTML;
    d2 = document.getElementById("d2").innerHTML
    d3 = document.getElementById("d3").innerHTML
    d4 = document.getElementById("d4").innerHTML
    d5 = document.getElementById("d5").innerHTML
    d6 = document.getElementById("d6").innerHTML
    d7 = document.getElementById("d7").innerHTML
    d8 = document.getElementById("d8").innerHTML
    d9 = document.getElementById("d9").innerHTML

    // evaluation for x

    if((d1 == "X") && (d2 == "X") && (d3 == "X")){
        results.textContent = player_one_name + " Won!!"

    }

    else if ((d1 == "X") && (d4 == "X") && (d7 == "X")){
        results.textContent = player_one_name + " Won!!"
    }

    else if ((d4 == "X") && (d5 == "X") && (d6 == "X")){
        results.textContent = player_one_name + " Won!!"
    }

    else if ((d7 == "X") && (d8 == "X") && (d9 == "X")){
        results.textContent = player_one_name + " Won!!"
    }

    else if ((d1 == "X") && (d5 == "X") && (d9 == "X")){
        results.textContent = player_one_name + " Won!!"
    }

    else if ((d3 == "X") && (d5 == "X") && (d7 == "X")){
        results.textContent = player_one_name + " Won!!"
    }
    else if ((d3 == "X") && (d6 == "X") && (d9 == "X")){
        results.textContent = player_one_name + " Won!!"
    }

    // evaluation for O
    else if((d1 == "O") && (d2 == "O") && (d3 == "O")){
        results.textContent = player_two_name + " Won!!"
    }

    else if ((d1 == "O") && (d4 == "O") && (d7 == "O")){
        results.textContent = player_two_name + " Won!!"
    }

    else if ((d4 == "O") && (d5 == "O") && (d6 == "O")){
        results.textContent = player_two_name + " Won!!"
    }

    else if ((d7 == "O") && (d8 == "O") && (d9 == "O")){
        results.textContent = player_two_name + " Won!!"
    }

    else if ((d1 == "O") && (d5 == "O") && (d9 == "O")){
        results.textContent = player_two_name + " Won!!"
    }

    else if ((d3 == "O") && (d5 == "O") && (d7 == "O")){
        results.textContent = player_two_name + " Won!!"
    }
    else if ((d3 == "O") && (d6 == "O") && (d9 == "O")){
        results.textContent = player_two_name + " Won!!"
    }

    // evaluation for tie 
    
    else{
        if (((d1 == "X") && (d2 == "X") && (d3 == "X"))
            || ((d4 == "O") && (d5 == "O") && (d6 == "O")) ){
                console.log("its a tie")
            }
    }
}
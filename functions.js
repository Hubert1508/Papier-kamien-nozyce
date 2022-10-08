window.onload = function(){

    let acctionButton = document.querySelectorAll(".acction-button");

    for (let i = 0; i < acctionButton.length; i++){

        acctionButton[i].style.display = "none";
    }    
}

let acctionButton = document.querySelectorAll(".acction-button");

for (let i = 0; i < acctionButton.length; i++) {

    acctionButton[i].onclick=function(){

        let valueButton = acctionButton[i].value;
        //console.log(valueButton);

        let result = document.getElementById("result");
        let player = document.getElementById("player");
        let wynik = document.getElementById("wynik");

        let playerName = localStorage.getItem("playerName");


        let computerPlayer = Math.floor((Math.random() * 3));

        let papier = "Papier";
        let kamien = "Kamień";
        let nozyce = "Nożyce";

        let wygrana = "Wygrana!";
        let przegrana = "Przegrana!";
        let remis = "Remis!";

        let pkt = document.querySelector("#pkt");

        if(computerPlayer===0){

            result.innerHTML= "Komputer: "+ papier;
            player.innerHTML = playerName +": "+ valueButton;

            if(papier===valueButton){

                wynik.innerHTML ="Wynik: "+  remis;

            }

            else if(computerPlayer===0 && valueButton===kamien){

                wynik.innerHTML ="Wynik: "+  przegrana;

                pkt.innerHTML = pkt.value--;

            }

            else if(computerPlayer===0 && valueButton===nozyce){

                wynik.innerHTML ="Wynik: "+  wygrana;

                pkt.innerHTML = pkt.value++;

            }

        }
        
        else if(computerPlayer===1){

            result.innerHTML= "Komputer: "+ kamien;
            player.innerHTML = playerName +": "+ valueButton;

            if(kamien===valueButton){

                wynik.innerHTML ="Wynik: "+  remis;

            }

            else if(computerPlayer===1 && valueButton===papier){

                wynik.innerHTML ="Wynik: "+  wygrana;

                pkt.innerHTML = pkt.value++;

            }

            else if(computerPlayer===1 && valueButton===nozyce){

                wynik.innerHTML ="Wynik: "+  przegrana;

                pkt.innerHTML = pkt.value--;

            }

        }

        else if(computerPlayer===2){

            result.innerHTML= "Komputer: "+ nozyce;
            player.innerHTML = playerName +": "+ valueButton;

            if(nozyce===valueButton){

                wynik.innerHTML = "Wynik: "+ remis;

            }

            else if(computerPlayer===2 && valueButton===papier){

                wynik.innerHTML ="Wynik: "+  przegrana;

                pkt.innerHTML = pkt.value--;

            }

            else if(computerPlayer===2 && valueButton===kamien){

                wynik.innerHTML ="Wynik: "+  wygrana;

                pkt.innerHTML = pkt.value++;

            }
        }
    }

  }


  let addPlayerName = document.querySelector("#addName");

  addPlayerName.onclick = function(){

    let valueInput = document.querySelector("#player-name");

    if(valueInput.value===""){

        alert("Podaj nazwę gracza!");

        return false;

    }

    else if(valueInput.value.length<=4){
        alert("Nazwa gracza musi zawierać minimum 5 znaków");
    }

    else if(valueInput.value.length>=11){
        alert("Nazwa gracza musi zawierać maksimum 10 znaków");
    }
    
    else{

        localStorage.setItem("playerName", valueInput.value);

        let acctionButton = document.querySelectorAll(".acction-button");

        addPlayerName.style.display = "none";
        valueInput.setAttribute("disabled", "disbaled");
        
        

        for (let i = 0; i < acctionButton.length; i++){

            acctionButton[i].removeAttribute("style", "none");
            
        }

    }

  }

  let newGame = document.querySelector("#new-game");

  newGame.onclick = function(){

    document.location.href = 'index.html';
    
  }

  


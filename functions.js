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

        if(computerPlayer===0){

            result.innerHTML= "Komputer: "+ papier;
            player.innerHTML = playerName +": "+ valueButton;

            if(papier===valueButton){

                wynik.innerHTML ="Wynik: "+  remis;

            }

            else if(computerPlayer===0 && valueButton===kamien){

                wynik.innerHTML ="Wynik: "+  przegrana;

            }

            else if(computerPlayer===0 && valueButton===nozyce){

                wynik.innerHTML ="Wynik: "+  wygrana;

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

            }

            else if(computerPlayer===1 && valueButton===nozyce){

                wynik.innerHTML ="Wynik: "+  przegrana;

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

            }

            else if(computerPlayer===2 && valueButton===kamien){

                wynik.innerHTML ="Wynik: "+  wygrana;

            }
        }
    }

  }


  let addPlayerName = document.querySelector("#addName");

  addPlayerName.onclick = function(){

    let valueInput = document.querySelector("#player-name").value;

    if(valueInput===""){

        alert("Podaj nazwę gracza!");

        return false;

    }else{

        localStorage.setItem("playerName", valueInput);

        let acctionButton = document.querySelectorAll(".acction-button");

        for (let i = 0; i < acctionButton.length; i++){

            acctionButton[i].removeAttribute("style", "none");
            
        }

    }

  }

  

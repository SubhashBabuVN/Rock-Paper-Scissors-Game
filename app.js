let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#comp-score");
//1)generate computer choice
const genCompChoice = () => {
        const options = ["rock","paper","scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
}

//1)draw game 
const drawGame = () =>{
 
      msg.innerText="game was draw play agian";
      msg.style.backgroundColor = " #081b31";
}

const showWinner = (userWin,userChoice,compchoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       
        msg.innerText=`You won!, Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comScorePara.innerText=compScore;
    
          msg.innerText=`You lost!, ${compchoice} beats Your ${userChoice}`;;
          msg.style.backgroundColor ="red";
        }
}
const playGame = (userChoice) => {
       
         //2)generate computer choice
         const compchoice=genCompChoice();
       


         if(userChoice === compchoice){
            //2)draw game 
            drawGame();
         }
         else{
            let userWin = true;
            if(userChoice === "rock"){
                 userWin = compchoice === "paper" ? false :true;
            }else if(userChoice === "paper"){
                  userWin = compchoice === "scissor" ? false: true;
            }
            else{
                userWin = compchoice === "rock"? false: true;
            }

            showWinner(userWin,userChoice,compchoice);
         }
        
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
}) 



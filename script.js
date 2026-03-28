let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#u-Score");
const compScorePara=document.querySelector("#c-Score")

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game is draw"
    msg.style.backgroundColor="black"
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You loose!${compChoice} beats Your${userChoice}`;
        msg.style.backgroundColor="red"
    }
};

const playGame=(userChoice)=>{
    // Generate computer choice
    const compChoice=genComputerChoice();

    if (userChoice===compChoice){
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});

const comChoice=()=>{

}

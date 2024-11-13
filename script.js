let userScore = 0;
let comScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreMsg = document.querySelector("#user-score");
const comScoreMsg = document.querySelector("#com-score");
const genComChoice=()=>{
    const options = ["rock" , "paper" , "scissors"] ;
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}
const drawGame =()=>{
    msg.innerText = "Game was Draw !";
    msg.style.backgroundColor = "#081b31";

}
const showWinner = (win,userChoice,comChoice)=>{
    if(win){
        userScore++;
        userScoreMsg.innerHTML=userScore;
        msg.innerHTML= `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        comScoreMsg.innerHTML=comScore;
        msg.innerHTML= `You Loose ${comChoice} beats Your ${userChoice} try again`;
        msg.style.backgroundColor = "red";


    }
}
const playgame =(userChoice)=>{
    console.log("User choice : " ,userChoice);
    //generate computer choice
    const comChoice = genComChoice();
    console.log("com choice : " ,comChoice);
    
    if(comChoice===userChoice){
             //Draw game
             drawGame();
    }else {
        let userwin = true;
        if(userChoice==="rock"){
            userwin = comChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userwin = comChoice==="scissors"? false:true;
        } else{ 
            userwin = comChoice==="rock"? false:true;

        }
        showWinner(userwin,userChoice,comChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
          const userChoice= choice.getAttribute("id");
          playgame(userChoice);
    })
})
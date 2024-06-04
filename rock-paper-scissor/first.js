let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".logo");
const msg = document.querySelector(".msg");

const getcmpcho = (userch) => {
    //randoml choice stored in array
    let choices = ["rock","paper","scissor"]; 
    //random function to use random no but in java script dont have any types of random nombers so math class is use for it becuse math class it
    //is use random no of index for the array
    const cmpcho =Math.floor(Math.random()*3);
    // apko jitne bhi range ka number cahiye usse multiplay karna hoga
  return choices[cmpcho];
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userch = choice.getAttribute("id");
        console.log("button was clicked",userch);
        playgame(userch);
    });
});

const playgame = (userch) => {
    console.log("user choice = ",userch);
    const comch = getcmpcho(userch);
    console.log("computer choice =",comch);
    test(userch,comch);
// call function test and let check who is winner

}

const  test = (userch,comch) => {
    if(userch === comch){
    drowgame();
    }
    else {
        let userwin = true;
        if(userch === "rock"){
            //computer ya to sic.paper
           // comch === "paper" ? userwin = false: userwin = true;        }
           userwin = comch === "paper" ?  false:true;
        }
         else if(userch === "paper"){
            //computer ya to sic.paper
           // comch === "paper" ? userwin = false: userwin = true;        }
          userwin = comch === "scissor" ? false:true;
        }
        else{
         userwin = comch === "rock" ? false:true;
        }
showwinner(userwin);  
     
    }
};

const drowgame = () =>{
    msg.innerText = "Match Was Draw";
    console.log("match was draw");
}
const showwinner = (userwin) => {
 if(userwin){
    console.log("user are win the match");
    msg.innerText ="You Win!";
 }
 else{
    console.log("user are lost the match");
    msg.innerText = "You Lose!";

 }
}
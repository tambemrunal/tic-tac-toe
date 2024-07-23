const winnerArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
let winner=0;
let turnO=true;
let count=0;
let heading=document.querySelector('.heading');
let boxes=document.querySelectorAll('.box');
let msgContainer=document.querySelector('.msg-container');
let block=document.querySelector('.game');
let resetbtn=document.querySelector('.reset-btn');
let newbtn=document.querySelector('.new-btn');
// let msg=d
newbtn.classList.add('hide');

boxes.forEach((box)=>{
    // console.log(boxes[i]);

    box.addEventListener('click', function(){
        // console.log("clicked");
        if(turnO){
            box.innerText="O";
            disableBoxes();
            turnO=false;
            winner='O';

        }
        else{
            box.innerText="X";
            disableBoxes();
            turnO=true;
            winner='X';

        }
        count++;
        checkWinner();
    })

    
});
// console.log(boxes);

const checkWinner=()=>{
    // let p1,p2,p3;
    for(const pattern of winnerArr){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
         
        // console.log(p1);
        if(p1!=="" && p2!=="" && p3!==""){
            if(p1===p2 && p2===p3 ){
                // console.log("winner");
                msgContainer.classList.remove('hide');
                // alert("win game");
                heading.classList.add('hide');
                msg.innerText=`${winner} you win the game`;
                
                block.classList.add('hide');
                resetbtn.classList.add('hide');
                newbtn.classList.remove('hide');

            }
        }

    }
    if(count==9){
        msgContainer.classList.remove('hide');
        heading.classList.add('hide');
        msg.innerText=`you lose the game`;
                
        block.classList.add('hide');
        resetbtn.classList.add('hide');
        newbtn.classList.remove('hide');
        
    }
    
    
}

let disableBoxes=()=>{
    for(let box of boxes){
        if(box.innerText!=''){
            box.disabled=true;

        }
    }
}

let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}

let newGame=()=>{
    msgContainer.classList.add('hide');
    heading.classList.remove('hide');
    msg.innerText="winner you win";
    block.classList.remove('hide');
    resetbtn.classList.remove('hide');
    newbtn.classList.add('hide');
    enableBoxes();
    turnO=true;
    

}

newbtn.addEventListener('click',newGame);
resetbtn.addEventListener('click',newGame);
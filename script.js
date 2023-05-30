let playerone=true
let boxes=document.querySelectorAll(".box")
let box=document.getElementsByClassName("box")
// box[0].style.color="Green"
let btn=document.getElementById("button")
console.log(document.getElementsByClassName("one")[0].innerText)
console.log(box[1])
console.log(box)
function turn(element){
    // let key=document.querySelector
    if (playerone){
        if(!(element.classList.contains("true"))){
            element.classList.add("input")
            element.classList.add("true")
            element.innerText="X"
            // console.log(element)
            if  (checkResult("X",element)){
                return true
            }

            playerone =!playerone
        }

    }
    
    else {
        if(!(element.classList.contains("true"))){
            element.classList.add("input");
            // console.log(element)
            element.classList.add("true")
            element.innerText="O"
            if (checkResult("O",element)){
                return true
            }
            playerone =!playerone
        }
    }
    return false
    // else element.innerText="O"

}

for(let i=0;i<9;i++){
    console.log(boxes[i])
    boxes[i].addEventListener("click",function(){
        if (turn(boxes[i])){
            return 
        }
    })
}




function checkResult(X,element){
    let winningPos=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]
    // console.log(element)
    let win="true"
    let obj={
        one:0,
        two:1,
        three:2,
        four:3,
        five:4,
        six:5,
        seven:6,
        eight:7,
        nine:8
    }

    let winnerClass={

    }

    let classes=element.classList
    console.log(classes[0])
    let first=obj[classes[0]]
    console.log(first)
    let target=first
    
    let search=document.getElementsByClassName("box")
    let see=search[target]
    // console.log(see) 
    // console.log("hehe")
    let x=0
    if ((target==0) || (target==2) ||(target==6) ||(target==8)){
       x=3
    }
    else if  (target==4){
        x=4
    }
    else {
        x=2
    }
    let inClass="loser"
    // see.classList.add("winner")
    console.log("x "+x)
    let curr=0
    for (let i=0;i<8;i++){
        for (let j=0;j<3;j++){
            if (winningPos[i][j]==target){
                win="true"
                for (let k=0;k<2;k++){
                    if (search[winningPos[i][k]].innerText!=search[winningPos[i][k+1]].innerText){
                        win="false"
                        // console.log(search[winningPos[i][k]].innerText)
                        // console.log(winningPos[i][k])
                        // console.log(winningPos[i])
                        // see.classList.remove("winner")
                        // inClass="loser"
                        break
                    }
                    else{
                        curr=k
                    }
                }
                if (win=="true"){
                    let res=document.getElementsByClassName("result")[0]
                    let ans=search[winningPos[i][curr]].innerText
                    res.innerText="Winner " + ans
                    return true
                    // console.log(search[winningPos[i][curr]].innerText + "   won")
                    // see.classList.add(inClass)
                }
                // console.log("win "+winningPos[i])

            }
            else{
                continue
            }
        }
    }
    return false
}

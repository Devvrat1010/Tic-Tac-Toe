let playerone=true
let boxes=document.querySelectorAll(".box")
let box=document.getElementsByClassName("box")
let btn=document.getElementById("button")
console.log(box[1])
console.log(box)
function turn(element){
    // let key=document.querySelector
    if (playerone){
        element.classList.add("o")
    }
    else element.classList.add("x")
    // else element.innerText="O"

    playerone =!playerone
}

for(let i=0;i<9;i++){
    console.log(boxes[i])
    boxes[i].addEventListener("click",function(){
        turn(boxes[i])
    })
}
res=[]
btn.addEventListener("click",function(){

    for (i=0;i<9;i++){
        let key=document.getElementsByClassName("box")[i]
        let check=key.classList.contains("x")
    if (check){
        res.push(1)
    }
    else res.push(0)
    checkResult()
}
console.log(res)
})

function checkResult (){
    winningPos=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]
    let target=0
    for (let i=0;i<9;i++){
        for (let j=0;j<3;j++){
            if (winningPos[i][j]===target){
                console.log(winningPos[i])
            }
            else{
                continue
            }
        }
    }
}
// let container=document.getElementsByClassName("box")[1]
// console.log(container)
// let key=container.classList.contains("x")
// console.log(key)
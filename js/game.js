var board=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,7],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

var xArray=[];
var oArray=[];
var isX=true;

var gameDOM=document.querySelector(".gameboard");

var html=""
var tiles="";

board.forEach((row,y)=>row.forEach((value,x)=>{
        if(value === 0){
            html += "<div class='tile x'></div>"
        }
   
}))

gameDOM.innerHTML=html;

tiles=document.querySelectorAll(".tile")

console.log(tiles)

tiles.forEach((t,idx)=>{
    t.onclick=(e)=>clickTile(e,idx);
})



function clickTile(e,idx){
    console.log(idx)
    console.log(e.target)
    console.log(tiles.children)
   
    if(isX){
    xArray.push(idx)
    e.target.innerHTML="<h1 class='playermark'>X</h1>" 
    isX=!isX
    checkWinner('X',xArray)
    }
    else{
        oArray.push(idx)
        e.target.innerHTML="<h1 class='playermark'>O</h1>" 
        isX=!isX
        checkWinner('O',oArray)
    }
    switchClass();
    

}

function switchClass(){
    tiles.forEach(t=>{
        t.classList.toggle("x")
        t.classList.toggle("o")
    })
}


function checkWinner(team,player){
    winningCombos.forEach(combo=>{
        var counter=0
        combo.forEach(num=>{
            if(player.indexOf(num) !== -1){
                counter++
            }
            if(counter === 3){
                document.querySelector(".winner").innerHTML=`<h1>${team} is the WINNER!</h1>`
                console.log("winner!!")
                setTimeout(()=>{
                    startOver()
                },3000)
            }
        })
    })
}


function startOver(){
    tiles.forEach(t=>{
        t.className= "tile"
        if(t.hasChildNodes()){
        t.removeChild(t.childNodes[0])
        }
    })
    document.querySelector(".winner").removeChild(document.querySelector(".winner").childNodes[0])
    
    xArray=[];
    oArray=[];
    tiles=document.querySelectorAll('.tile')
}
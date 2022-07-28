
let insideParagraph = document.querySelector("#insideParagraph")
let popUpWindow = document.querySelector(".structure")
let body = document.getElementsByTagName("body")
let container = document.getElementById("space")
let NumberOfTry = 0
let bigGameContainer = document.querySelector(".backgroundInGameColor")
let chosedNumber = []
let fullColor = ["green","green","black","black","grey","grey","purple","purple",""]
let color = ["blue","yellow","blue","yellow","pink","pink"]
let completed = 0
let round = 6
let test = document.querySelector(".test")
let changeCurrentColor = 50
let changeNextColor = 30;
let currentStageColor = []
let NextStageColor = []
let transferingColor = []
let PLAYBUTTON = document.querySelector(".playButton")
let mainPage = document.querySelector(".mainPage")
let CloseTheMemoryCard = document.querySelector('.CloseTheMemoryCard')

let first_Time = 15 //second
let totalTimeUsed = 0
let runTimeSecond = 0
let runTimeMinute = 0
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let addColorNumber = 0
const milisecondRun = 1000




    

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
      // Pick a remaining element.
      
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
 //shuffle color


 function addColorInFirstStage(){
    addColorInNextStage()
    for(let t = 0; t < round ;t++){
        currentStageColor.push(`hsl(${(changeCurrentColor).toString()}, 100%, 50%)`)
        currentStageColor.push(`hsl(${(changeCurrentColor).toString()}, 100%, 50%)`)
        changeCurrentColor += 50
        
    }
    shuffle(currentStageColor)
    
    
    
}

function addColorInNextStage(){
    for(let n= 0; n < 3  ; n++){ //n < 11
        NextStageColor.push(`hsl(${(changeNextColor).toString()}, 100%, 39%)`)
        NextStageColor.push(`hsl(${(changeNextColor).toString()}, 100%, 39%)`)
        changeNextColor +=40
        
        
        
    }
    
   

}



startGame()

function startGame(){
    PLAYBUTTON.addEventListener("click",startGameInside)
   
    
}
function startGameInside(){
    addColorInFirstStage()
    
    mainPage.style.display ="none"
    container.style.display = "none"
    bigGameContainer.style.display = "flex"
    CloseTheMemoryCard.style.display ="flex"
    CloseTheMemoryCard.addEventListener("click",set_up)

}



async function set_up(){
    

    container.style.display = "flex"
    CloseTheMemoryCard.style.display ="none"
    ChangeSecond()
    for(let i =0; i < currentStageColor.length ; i++){
        
        let redBox = document.createElement("div")
        redBox.className = `first`
        redBox.id = i
        redBox.style.backgroundColor = 'black'
        redBox.addEventListener("click",choseCard)
        container.appendChild(redBox)
        
        
    }
    
}

function ChangeSecond(){
    let deleteInterval= setInterval(() => {
        if(totalTimeUsed == first_Time){

            clearInterval(deleteInterval)
        }
        if(runTimeSecond == 60){
            runTimeMinute +=1
            minute.innerHTML = runTimeMinute.toString().padStart(2,"0")
            
            runTimeSecond = 0  
        }
        second.innerHTML = runTimeSecond.toString().padStart(2,"0")
        runTimeSecond+=1
        totalTimeUsed +=1
    },milisecondRun);
}


function choseCard(event){

    let id = event.target.id
    if(chosedNumber.length == 2){
        return
    }
    if (chosedNumber.indexOf(id) != -1){
        return
    }
    chosedNumber.push(id)
    document.getElementById(id).style.backgroundColor = currentStageColor[id]
    if(chosedNumber.length ==2){

        matchOrNot()
    }
    
}

function matchOrNot(){
    if(currentStageColor[chosedNumber[0]] == currentStageColor[chosedNumber[1]]){


        document.getElementById(chosedNumber[0]).removeEventListener("click",choseCard)
        document.getElementById(chosedNumber[1]).removeEventListener("click",choseCard)
        chosedNumber =[]
        NumberOfTry +=1
        completed +=1
        endedStages()
        
         
        
        
    }
    else{
        setTimeout(() => {
  
            NumberOfTry +=1
            document.querySelectorAll(".first")[chosedNumber[0]].style.backgroundColor = "black"
      
            document.querySelectorAll(".first")[chosedNumber[1]].style.backgroundColor = "black"
            chosedNumber =[]
        }, 0500);
        
    }
}

function endedStages(){
    setTimeout(() => {
        if(completed == currentStageColor.length / 2){ //completed == currentStageColor.length / 2
            document.getElementById("mark").innerText = NumberOfTry
            
            Popup()
            
        }
    }, 0500);
}

let buttonNextLevel = document.getElementById("nextLevel")

function Popup(){
    insideParagraph.innerText = `Well done Genius ,You have used total of ${NumberOfTry} steps to solve it, Lets go to the next stages`
    popUpWindow.style.display ="flex"
    
    buttonNextLevel.addEventListener("click",changeLevel)
}

function changeLevel(){

    completed =0
    popUpWindow.style.display ="none"
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
    currentStageColor = []
    changeCurrentColor = 50
    changeNextColor = 30

    let add_color = NextStageColor.splice(addColorNumber,2)
    console.log(add_color)
    if(addColorNumber == 6){
        EndingOfGame()
    }
    console.log(...add_color)
    transferingColor.push(...add_color)
    console.log(transferingColor)
    currentStageColor.push(...transferingColor)
    NextStageColor  = []
    addColorNumber +=2
    first_Time +=7
    totalTimeUsed = 0
    runTimeSecond = 0
    runTimeMinute = 0
    minute.innerHTML = '00'
    second.innerHTML = '00'
    startGameInside()
    
}

let endPop  = document.querySelector(".gameEndingOuter")
let endButton = document.querySelector(".gameEndingButton")
let gameEndMark = document.querySelector("#gameEndingMark")

function EndingOfGame(){
    endPop.style.display = "flex"
    gameEndMark.innerHTML = NumberOfTry.toString()
    endButton.addEventListener("click", BackToMainMenu)
}

function BackToMainMenu(){
    bigGameContainer.style.display = "none"
    mainPage.style.display = "flex"
}























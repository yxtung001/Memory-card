

let matchCount = 5;
let clicker = 0;
let round = 6
let clickTime = round -2
let container = document.getElementById("space")
let mark = parseInt(document.getElementById("mark").innerText)
let chosedColor = []
let chosedNumber = []
let level =[1,2,3,4,5]
let fullColor = ["green","green","black","black","lightgreen","lightgreen"]
let color = ["blue","yellow","blue","yellow","pink","pink"]
let mirrorColor = color

let completed = []

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
shuffle(color) //shuffle color

for(let i =0; i < round ; i++){

    let redBox = document.createElement("div")
    redBox.className = `first`
    container.appendChild(redBox)


    document.querySelectorAll(".first")[i].addEventListener("click", function swap(){
        document.querySelectorAll(".first")[i].style.backgroundColor = color[i]
        chosedColor.push(color[i])
        chosedNumber.push(i)
        
        

        if(chosedNumber[0] == chosedNumber[1]){
            chosedNumber.splice(1,1)
            chosedColor.splice(1,1)
        }
    
        if(chosedNumber[0] != chosedNumber[1] && chosedNumber[1] !== undefined){
            if(clickTime == 0){
                document.getElementById("mark").innerText = mark
                
            }
            clickTime -=1
            console.log(chosedNumber)
            console.log(chosedColor)
            if(chosedColor[0] ==chosedColor[1]){
                document.querySelectorAll(".first")[1].removeEventListener("click",swap)
                document.querySelectorAll(".first")[2].removeEventListener("click",swap)
                console.log(document.querySelectorAll(".first")[1])
                console.log(document.querySelectorAll(".first")[2])
                mark +=1
                let anotherSet = chosedColor.splice(0,2)
                chosedNumber.splice(0,2)
                
                
            }
    
             setTimeout(() => {
                
                if(chosedColor[0] !==chosedColor[1]){
                    mark -=1
    
                    document.querySelectorAll(".first")[chosedNumber[0]].style.backgroundColor = 'red'
                    document.querySelectorAll(".first")[chosedNumber[1]].style.backgroundColor = 'red'
                    
                    chosedColor.splice(0,2)
                    chosedNumber.splice(0,2)
                }
                
            }, 0500);
            
        }
        
    })

    
    
}
//first method
const swaping = () =>{
    
}


//second method


  
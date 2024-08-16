// ************************************************************************
//                              Pop-up Button
// ************************************************************************

const play = document.getElementById('play') ;
const overlay = document.getElementById('overlay') ;
const pop = document.getElementById('pop') ;


play.addEventListener('click' , () =>{
    overlay.style.display = 'none' ;
    pop.style.display = 'none' ;
})




// ************************************************************************
//                  Getting user&cpu&tie scores and images
// ************************************************************************

const userScr = document.getElementById('user-scr');
const cpuScr = document.getElementById('cpu-scr');
const tieScr = document.getElementById('tie-scr');
const userImg = document.getElementById('userImg');
const cpuImg = document.getElementById('cpuImg');

const matchResult = document.getElementById('result-display') ;


// ************************************************************************
//                              Main Coding
// ************************************************************************

let userOption = "" ;
let cpuOption = "" ;
let userScore = 0 ;
let cpuScore = 0 ;
let tie = 0 ;


// -----------------------------------------------------------------
//            Function for calculating CPU's Value
// -----------------------------------------------------------------

const cpuValue = () =>{
    cpuOption = Math.floor( Math.random() * 3) ;

    if( cpuOption === 0){
        cpuOption = "Rock" ;
        cpuImg.src = "/images/rock-happy.png" ;
        
    }
    else if( cpuOption === 1){
        cpuOption = "Paper"
        cpuImg.src = "/images/paper-happy.png" ;
    }
    else{
        cpuOption = "Scissors"
        cpuImg.src = "/images/scissors-happy.png" ;
    }

    cpuImg.style.display = "block" ;
    cpuImg.style.transition = 1 ;
    console.log("CPU selected: " + cpuOption);
}





// -----------------------------------------------------------------
//                 Function for calculating Result
// -----------------------------------------------------------------

const result = () => {
    if( userOption === cpuOption ){
        matchResult.innerHTML = "It's a Tie" ;
        tie++ ;
    }
    else if( (userOption === "Rock" && cpuOption === "Scissors")  ||  (userOption === "Scissors" && cpuOption === "Paper")  ||  (userOption === "Paper" && cpuOption === "Rock") ){
        matchResult.innerHTML = "You win" ;
        userScore++ ;
    }
    else{
        matchResult.innerHTML = "CPU wins"
        cpuScore++ ;
    }

    matchResult.style.display = 'block' ;

    userScr.innerHTML = userScore ;
    cpuScr.innerHTML = cpuScore ;
    tieScr.innerHTML = tie ;
}



const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click' , () => {
    userScore = cpuScore = tie = 0 ;
    console.log('---------------------------------------------');
    console.log('\t\tScore has been Reset');
    console.log('---------------------------------------------');

    userImg.style.display = 'none' ;
    cpuImg.style.display = 'none' ;
    matchResult.style.display = 'none' ;

    userScr.innerHTML = cpuScr.innerHTML = tieScr.innerHTML = 0 ;
})



const choice = document.querySelectorAll('.choiceBtn') ;

choice.forEach( button => {
    button.addEventListener('click' , () => {
        userOption = button.value ;

        if( userOption === "Rock" ){
            userImg.src = "/images/rock-happy.png" ;
        }
        else if( userOption === "Paper"){
            userImg.src = "/images/paper-happy.png" ;
        }
        else{
            userImg.src = "/images/scissors-happy.png" ;
        }

        userImg.style.display = 'block' ;

        console.log("User selected: " + userOption) ;

        cpuValue();
        result();
        console.log('\n User Score: ' + userScore + '\t CPU score: ' + cpuScore + "\t Ties/Draws: " + tie);
        console.log('-----------------------------------------------------');
    })
})

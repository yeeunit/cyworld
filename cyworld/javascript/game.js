const startWord = () =>{

    const word = document.getElementById("word").innerText
    const myword = document.getElementById("myword").value

    const lastword = word[word.length -1]
    const firstword = myword[0]

    if(lastword === firstword) {
        document.getElementById("word").innerText = myword
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("myword").value = ""
    } else {

        document.getElementById("result").innerText = "땡."
        document.getElementById("myword").value = ""

    }

}


function lotto(){

    const randomNum = Math.floor( Math.random() * 45 +1 ) 
    
    document.getElementById("num").innerText = randomNum
    document.getElementById("num").style.color = "purple" 


    document.getElementById("note").innerText = "숫자를 확인하세요!"

    document.getElementById("btn").innerText = "다시뽑기"
    document.getElementById("btn").style.color = "tomato"

}

/*
function startWord() {

    const word = document.getElementById("word").innerText
    const myword = document.getElementById("myword").value

    const lastword = word[word.length-1]
    const firstword = myword[0]

    if(lastword === firstword) {
        document.getElementById("word").innerText = myword
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("myword").value=""
    } else{
        document.getElementById("result").innerText = "땡"
        document.getElementById("myword").value = ""
    }



}

*/



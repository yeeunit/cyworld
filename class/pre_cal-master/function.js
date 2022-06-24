
// 화살표 함수
const send = () => {

     // 여기에 코드를 입력하세요 

     const token = String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 
     
     document.getElementById("auth").innerText = token
     document.getElementById("auth").style.color = "#" + token 
  
}



/* 
setTimeout(function(){
    console.log("3초가 지났습니다")
},3000)
1
VM551:2 3초가 지났습니다
setInterval(function(){console.log("1초")},1000)
2
6VM557:1 1초


<10초 카운트 다운>
let time = 10
undefined
setInterval(function() {
    if(time >= 0){
        console.log(time)   
        time = time -1
    }
} ,1000)




*/


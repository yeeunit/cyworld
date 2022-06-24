let isStarted = false 

const send = () => {

    if(isStarted === false) {

        isStarted = true
        document.getElementById("finish").disabled = false

        const token = String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 
        document.getElementById("auth").innerText = token
        document.getElementById("auth").style.color = "#" + token 
 

        let time = 60 
        let timer

        timer = setInterval(function(){
            console.log("작동중")
            if(time>=0){
                let min = Math.floor(time/60)
                let sec = String(time%60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time -1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false

                clearInterval(timer)
            }

        }, 1000)

    } else {
        
        console.error("타이머가 이미 작동중입니다")

    }
}

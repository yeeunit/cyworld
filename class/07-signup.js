const checkValidation = () => {

    // input 태그의 값을 가져와서 변수에 저장
    // 변수에 담긴 값들이 모두 비어있지 않은 경우 버튼을 활성화
    // 하나라도 비어있으면 버튼을 비활성화

    const email = document.getElementById("email").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value

    if(email !== "" && pw1 !=="" && pw2 !== ""){
        document.getElementById("submit").disabled = false
    } else {
        document.getElementById("submit").disabled = true
        document.getElementById("submit").setAttribute("style", "background-color: yellow;")
    }


}
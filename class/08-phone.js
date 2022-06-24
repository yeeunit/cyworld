
const changeFocus1 = () => {

    const phone1 = document.getElementById("phone1").value

    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

const changeFocus2 = () => {

    const phone2 = document.getElementById("phone2").value

    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}

const changeFocus3 = () => {

    const phone3 = document.getElementById("phone3").value

    if(phone3.length === 4){
        document.getElementById("phone3").focus()
    }


}
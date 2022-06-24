function hello(props) {
    alert(props + "님 안녕하세요")
}
// undefined
hello()
// undefined
hello(yeeun)
// VM324:1 Uncaught ReferenceError: yeeun is not defined
    // at <anonymous>:1:7
// (anonymous) @ VM324:1
hello("ye")
// undefined
function hello2(name) {
    return name + "님 안녕하세요" 
}
// undefined
hello2("ye")
'ye님 안녕하세요'

const classmate = ["차지훈", "주준휘", "정예은"] 
// undefined
function greetingStudents(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + "님 반갑습니다")
    }
} 
// undefined
greetingStudents(classmate)
// VM1425:3 차지훈님 반갑습니다
// VM1425:3 주준휘님 반갑습니다
// VM1425:3 정예은님 반갑습니다
// undefined
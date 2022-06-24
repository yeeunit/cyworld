1+1
// 2
1+'1'
// '11'
10+'9'
// '109'
typeof(1)
// 'number'
typeof(gogo)
// 'undefined'
typeof('go')
// 'string'
typeof({})
// 'object'
typeof([])
// 'object'
typeof(true)
// 'boolean'
Array.isArray([])
// true
Array.isArray({})
// false
'A' === 'A'
// true
'a' === 'A'
// false
'1' === 1
// false
"b" === 'b'
// true
"B" === 'a'
// false
true && false
// false
true && !false
// true
true || false
// true
true || true
// true
false || false
// false

if('A' === 'A') {
    console.log("정답")
} else {
    console.log("땡")
}
// VM1023:2 정답
// undefined
if(false) {
    console.log("정답")
} else {
    console.log("땡")
}
// VM1078:4 땡
// undefined
if(true) {
    console.log("정답")
} else {
    console.log("땡")
}
// VM1098:2 정답
// undefined
if(0) {
    console.log("정답")
} else {
    console.log("땡")
}
// VM1135:4 땡
// undefined
if(1) {
    console.log("정답")
} else {
    console.log("땡")
}
// VM1144:2 정답
// undefined


const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}

if(profile.age >= 20){
    console.log("성인입니다")
} else if (profile.age >= 8){ // 비교 대상을 앞에
    console.log("학생입니다")
} else if(profile.age >= 0){
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다") // 에러 핸들링
}
// VM1485:4 학생입니다
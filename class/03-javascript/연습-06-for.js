
const children = ["철수", "영희", "훈이"]

for (let i = 0; i < 3; i++) {
    console.log(children[i] + "입니다.")
} 
// VM1822:2 철수입니다.
// VM1822:2 영희입니다.
// VM1822:2 훈이입니다.


for (let i = 0; i < children.length; i++) {
    console.log(children[i] + "입니다.")
} 
// VM1892:2 철수입니다.
// VM1892:2 영희입니다.
// VM1892:2 훈이입니다.


for (let i = 0; i < children.length; i++) {
    console.log(children[i] + "입니다.")
} 


let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]
  
  
  for (let count = 0; count < persons.length; count++) {
      if(persons[count].age >= 19) {
          console.log(`제가 봤을때는 ${persons[count].name} 님은 ${persons[count].age}세로, 성인입니다.`)
      } else {
          console.log(`제가 봤을때는 ${persons[count].name} 님은 ${persons[count].age}세로, 성인입니다.`)
      }
  }    

//   VM3680:5 제가 봤을때는 철수 님은 18세로, 성인입니다.
//   VM3680:3 제가 봤을때는 영희 님은 22세로, 성인입니다.
//   VM3680:5 제가 봤을때는 도우너 님은 5세로, 성인입니다.
//   VM3680:5 제가 봤을때는 말포이 님은 14세로, 성인입니다.
//   VM3680:5 제가 봤을때는 도비 님은 3세로, 성인입니다.
//   undefined


const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
    

// VM4177:15 1 레드향
// VM4177:15 2 샤인머스켓
// VM4177:15 3 산청딸기
// VM4177:15 4 한라봉
// VM4177:15 5 사과
// VM4177:15 6 애플망고
// VM4177:15 7 딸기
// VM4177:15 8 천혜향
// VM4177:15 9 과일선물세트
// VM4177:15 10 귤

for (let i = 0; i < fruits.length; i++){
    console.log(`${fruits[i].number}  ${fruits[i].title}`)
}
 

Math.random()
0.9788914267800977
Math.random() * 1000000
346563.94799020205
Math.random() * 10
0.2627261197146824
Math.random() * 100
93.55916611446496
Math.random() * 10
0.6612932395102766
Math.floor(Math.random() * 1000000)
649483
Math.random() * 10
4.095359884636984
Math.random() * 10
8.529931403726213
Math.random() * 10
7.96694096874305
Math.random() * 100
86.34747027631677
Math.random() * 1000000
69301.25098227902
Math.random() * 1000
180.45900879222665
String(Math.floor(Math.random() * 1000000))

'134876'
Number("123")
123
String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 

'679467'
String( Math.floor( Math.random() * 1000000 ) ).padStart(6,0) 

'416655'
String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 

'786393'
let phoneAuth = String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 
undefined
let phoneAuth = String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 
undefined
String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0") 
'796265
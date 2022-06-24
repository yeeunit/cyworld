let pairFriends = ["주준휘", "차지훈", "송재의", "김재범", "박효진"]  
// undefined

pairFriends
// (5) ['주준휘', '차지훈', '송재의', '김재범', '박효진']

pairFriends[1]
// '차지훈'

pairFriends.includes('주은')
// false

pairFriends('주준휘')
// VM772:1 Uncaught TypeError: pairFriends is not a function
    // at <anonymous>:1:1
// (anonymous) @ VM772:1

pairFriends.includes('주준휘')
// true

pairFriends.push("맹구")
// 6

pairFriends
// (6) ['주준휘', '차지훈', '송재의', '김재범', '박효진', '맹구']

pairFriends.pop()
// '맹구'

pairFriends
// (5) ['주준휘', '차지훈', '송재의', '김재범', '박효진']0: "주준휘"1: "차지훈"2: "송재의"3: "김재범"4: "박효진"length: 5[[Prototype]]: Array(0)

pairFriends.length
// 5


let developer = ["억대연봉","커리어","워라밸","외국계","사람"]
// undefined
console.log(developer)
// VM1593:1 (5) ['억대연봉', '커리어', '워라밸', '외국계', '사람']
// undefined
console.log.pop(1)
// VM1667:1 Uncaught TypeError: console.log.pop is not a function
    // at <anonymous>:1:13
// (anonymous) @ VM1667:1
console.log.pop[2]
// VM1722:1 Uncaught TypeError: Cannot read properties of undefined (reading '2')
    // at <anonymous>:1:16
// (anonymous) @ VM1722:1
// developer[2]
// '워라밸'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
console.log(dream)
// VM1992:1 (3) ['커리어점프', '성공', '할수있다']
// undefined
developer.concat(dream)
// (8) ['억대연봉', '커리어', '워라밸', '외국계', '사람', '커리어점프', '성공', '할수있다']
console.log(dream)
// VM2387:1 (3) ['커리어점프', '성공', '할수있다']
// undefined
console.log(developer)
// VM2460:1 (5) ['억대연봉', '커리어', '워라밸', '외국계', '사람']
// undefined



let str = `
010-6969-6969
mbae.nw@gmail.com
https: //my.wizardingworld.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

//const regexp = new RegExp('the', 'gi')
// const regexp = /fox/gi
//console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/the/gi))

// console.log(str.match(/\.$/gim))
// //  \ 는 escape임.   '.' 은 무슨 의미가 이미 있기때문에 해야함
// // = 는 끝나는부분에 . 이 있는지 확인해라 m = 여러라인애

// console.log(
//   str.match(/d$/g)
// )
//null

// console.log(
//   str.match(/d$/gm)
// )
// ['d']

console.log(
  str.match(/h..p/g)
)

console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
)
//63개 문자가아닌 경계에서 시작해서 f라는 알파벳으로 시작하고 그 바로뒤에 그 f외에 63개문자가 1개이상 오는 연속일치 시킨후
//63개 문자아닌 경계에서 끝나라

console.log(
  str.match(/\d{1,}/g)
)
// ['010', '6969', '6969', '1234']

const h = `  cookie hello world    !

`

console.log(
  str.match(/\s/g)
)

console.log(
  h.replace(/\s/g, '')
)
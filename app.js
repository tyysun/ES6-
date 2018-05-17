// let colors = ['red','blue','green']
// //ES5遍历
// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i])
// }
// //ES6 forEach
// colors.forEach(color => console.log(color))
// //练习： 遍历数组中的值，并计算总和
// let numbers = [1,2,3,4]
// let sum = 0
// numbers.forEach(number => {
//   sum += number
// })
// console.log(sum)
// console.log('__________')

//map

//场景1
//假定有一个数值数组A，将A数组中的数值以双倍的形式放到B数组
 

// let numbers = [1,2,3,4]
// // let doubled = []
// //es5
// // for(let i =0; i < numbers.length; i++){
// //   doubled.push(numbers[i] * 2)
// // }
// // console.log(doubled)
// // es6
// let doubled = numbers.map(number => {
//   return number * 2
// })
// console.log(doubled)
// doubled.forEach(number => console.log(number))


// //场景2
// //假定有一个对象数组A，将A数组中的对象的某个属性值存到B数组

// let people = [
//   { name:'tyy',age:23},
//   { name:'yyt',age:24},
//   { name:'yty',age:25},
// ]

// let ages = people.map(peo => {
//   return peo.age
// })
// console.log(ages)



//filter

// 场景1 
// 假定一个对象数组A，获取数组中指定类型的对象放到B数组中
// let products = [
//   {name:'cucumber',type:'vegetable'},
//   {name:'celery',type:'vegetable'},
//   {name:'banane',type:'fruit'},
//   {name:'orange',type:'fruit'},
// ]

// let filtered = products.filter(product => {
//   return product.type === 'fruit'
// })
// console.log(filtered)





// 场景2
// 假定一个对象数组A，过滤掉不满足一下条件的对象
// 条件 蔬菜 数量大于0 价格小于十
// let products = [
//   {name:'cucumber',type:'vegetable',quantity:8,price:8},
//   {name:'celery',type:'vegetable',quantity:0,price:8},
//   {name:'banane',type:'fruit',quantity:8,price:12},
//   {name:'orange',type:'fruit',quantity:4,price:9},
// ]

// let filtered = products.filter(product => {
//   return product.quantity > 0 && product.price < 10
// })
// console.log(filtered)


// 场景3
// 假定两个对象数组A，B,根据A中id,过滤掉B不符合的数据
// let post = {id:4,title:'Vue'}
// let comments = [
//   {postId:4,content:'Node'},
//   {postId:3,content:'React'},
//   {postId:2,content:'CSS'},
//   {postId:4,content:'HTML'},
// ]

// function fn(post,comments){
//  return comments.filter(comment => {
//    return comment.postId === post.id
//  })
// }
// console.log(fn(post,comments))
// console.log('________')



//find
// 场景1
// 假定有一个对象数组A，找到符合条件的对象
// let users = [
//   {name:'tyy'},
//   {name:'yty'},
//   {name:'yyt'},
// ]
// user = users.find(user => {
//   return user.name = 'tyy'
// })
// console.log(user)

// 场景2
// 假定有一个对象数组A，根据指定对象的条件找到符合条件的对象
let posts = [
  {Id:1,content:'Node'},
  {Id:3,content:'React'},
  {Id:2,content:'CSS'},
  {Id:4,content:'HTML'},
]

let comment = {postId:1,content:'hello world!'}

function fn(posts,comment ){
  return posts.find(post => {
    return post.Id === comment.postId
  })

}
console.log(fn(posts,comment))
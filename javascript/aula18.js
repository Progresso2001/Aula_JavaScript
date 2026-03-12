// Funcao Map()
// const a = [2, 3, 4, 5]
// const b = a.map(a=>a*3)
// console.log(b)

// const cursos =['Java', 'HTML', 'CSS', 'JS', 'Python']
// cursos.map((el,i)=>{
//     console.log("Curso:" + el + " - Posição do curso:" + i)
// })
// usando for para percorrer os elemntos
// const cursos =['Java', 'HTML', 'CSS', 'JS', 'Python']
// let c=cursos.map((el,i)=>{
//     return "<div>"+el+"</div>"
// })
// console.log(c)

// USANDO COM HTML AULA 18
// Nota: Existem 2 maneiras de usar o map() quando se
// tem um html collections
// let  el = document.getElementsByTagName("div")
// Primeira
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML= "Curso de JavaScript"
// })
// console.log(el)

// segunda forma
// const el=document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)

// Exemplos sobre map()
const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num =['1', '2','3','4','5'].map(dobrar)
console.log(num)
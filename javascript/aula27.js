// classes

// class MeuNome{
//     constructor(nome){
//         console.log(`Chamo-me ${nome} e sou um estudante .`)
//         this.nome=nome
//     }
// }
// const minhaInstancia = new MeuNome("Joaquim") //Instancia da class meuNome 


// hierarquia de class (superclass) usando a palavra chave this

// class SuperClass{
//     constructor(){
//         this.logger = console.log;
//     }
//     log(){
//         this.logger(`Hello ${this.name}`)
//     }
// }
// class SubClass extends SuperClass{
//     constructor(){
//         super();
//         this.name = 'DevJocas'
//     }
// }
// const subClass = new SubClass();
// subClass.log()

// O metodo static
// class MyClass{
//     static myStaticMethod(){
//         return 'Hello';
//     }
//     static get myStaticProperty(){
//         return 'Goodbye';
//     }
// }
// console.log(MyClass.myStaticMethod())
// console.log(MyClass.myStaticProperty)

// const myClassInstance =new MyClass()
// console.log(myClassInstance.myStaticProperty)

// Getters e Setters (get and set)

// class MyClass{
//     constructor(){
//         this.name_ = [];
//     }
//     set name(value){
//         this.name_.push(value);
//     }
//     get name(){
//         return this.name_[this.name_.length - 1]
//     }
// }

// const myClassInstance = new MyClass();
// myClassInstance.name = 'Dev';
// myClassInstance.name = 'Jocas'

// console.log(myClassInstance.name)
// console.log(myClassInstance.name_)


const obj = {
    name: "Sofia",
    greet: function(){
        //console.log("Hello, " + this.name)
        console.log(`Hello, ${this.name}`)
    },
    greet2:() =>{
        //can not access this.name
        console.log("Hello, " + this.name)
    }
}

obj.name = "Maria"

obj.greet = function (){
    console.log('My name is not Sofia')
}
obj.greet();

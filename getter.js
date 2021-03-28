var kiosk= {
    fruit:["orange"],
    fruit2:["mango"],
    set fruit(fruit){
        this.fruit2=this.fruit2
    },
    get fruit(){
        return this.fruit2
    },



}
console.log(kiosk.fruit2);




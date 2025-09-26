class Cat{
    constructor(name, weight, maxJumpHeight, verticalPosition){
       this.name = name;
        this.weight = weight;
        this.maxJumpHeight = maxJumpHeight;
        this.verticalPosition = verticalPosition
    }
    jump(power) {
        this.verticalPosition = this.maxJumpHeight * power}
}

const cat = new Cat("Megatron", 6.5, 150, 0);
console.log(cat.verticalPosition)
cat.jump(0.2)
console.log(cat.verticalPosition)
cat.jump(0.5)
console.log(cat.verticalPosition)

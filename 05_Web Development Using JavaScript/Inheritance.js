class vechial {
    constructor(name,capacity){
        this.name=name;
        this.capacity=capacity;
    }
    startEngine(){
        return `${this.name} can start and has capacity of ${this.capacity}`;
    }
    stopEngine(){
        return `${this.name} can stop and has capacity of ${this.capacity}`;
    }
    run(){
        return`${this.name} can run on manual mode`;
    }
    static break(){
        return`we are calling staatic method`;
    }
    callCapacity(){
        return`${this.name} has ${this.capacity} capacity`;
    }

}
class two_w extends vechial {
    constructor(name,capacity,tyre,engine){
        super(name,capacity);
        this.tyre=2;
        this.engine='3000cc';
    }
}
class three_w extends vechial {
    constructor(name,capacity,tyre,engine){
        super(name,capacity);
        this.tyre=3;
        this.engine='6000cc';
    }
}
var bike=new two_w('pulser 150','400W');
console.log(bike.startEngine());
console.log(bike.stopEngine());
console.log(bike.run());
console.log(vechial.break());
console.log(bike.callCapacity()+'\n');
var tricycle=new three_w('E_tricycle','200W');
console.log(tricycle.startEngine());
console.log(tricycle.stopEngine());
console.log(tricycle.run());
console.log(vechial.break());
console.log(tricycle.callCapacity()+'\n');
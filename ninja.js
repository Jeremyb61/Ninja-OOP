class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3; 
        this.drunk = false;       
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log("Name:" + ' ' + this.name + ' ' + "Health:" + this.health + ' ' + "Speed:" + this.speed + "Speed" + this.strength + "Drunk?" + this.drunk);
    }
    drinkSake() {
        this.health+=10;
        this.drunk = true;
        console.log('Drinking Sake')
    }
    punch(enemyninja) {
        if(Ninja){
            enemyninja.health-=5;
            console.log(`${enemyninja.name} was punched by ${this.name} and lost 5 health points`);
        } else { 
            console.log("No Way Jose!")
        }
      
    }
    kick(enemyninja) {
        if(Ninja){
        enemyninja.health-=15 * this.strength;
        console.log(`${enemyninja.name} was kicked by ${this.name} and lost ${this.strength * 15} health points`);
        }
    }

}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10; 
        this.drunk = false;
    }
    speakWisdom(){
        this.drinkSake()
        console.log('Drink sake, eat, code, repeat')
    }
}



    var sensei = new Sensei("Yomoyoshi");
    var ninja1 = new Ninja("riley");
    var ninja2 = new Ninja("jeremy");
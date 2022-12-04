//N1
const numbers =[10, 20,40,500, -40,3, -300, 8,-30];

//filter
const positiveNumbers = numbers.filter((number) => number > 0);
console.log(positiveNumbers);

//reduce
const sumOfpositiveNumbers= positiveNumbers.reduce((total, curr) => {
  console.log("total", total, "curr", curr);
  return total + curr;
}, 0);
 
console.log(sumOfpositiveNumbers);

//N2
let array =['natia', 'giorgi', 'ani', 'giorgi', 'natia', 'nika','natia',  'salome'];

const numberOfArray=array.reduce((acc, curr)=>{
    if(acc[curr]){
        return {...acc, [curr]: acc[curr]+1};
    }else{
        return{...acc, [curr]:1};
    }
}, {});

console.log(numberOfArray);

//N3
class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model=model;
        this.speed = 0;
        this.motion ="manqana gacherebulia";
    }

    check_motion=()=>{
        this.motion = this.speed>0 ? "manqana modzraobs" : "manqana gacherebulia";
    };

    accelerate =(speed)=>{
        this.speed += speed;
        this.check_motion();
    };
    brake = (speed)=>{
        this.speed < speed? (this.speed =0) : (this.speed -= speed)
        this.check_motion();
    };

    emergency_brake = ()=>{
        this.speed=0;
        this.check_motion();
    };

    status=()=>{
        return `this is ${this.brand} ${this.model} going with ${this.speed} and motion is ${this.motion}`
    };
}

const car1 = new Car("kia", "sportage", );
car1.accelerate(20);
console.log(car1.status());
car1.accelerate(15);
console.log(car1.status());
car1.emergency_brake();
console.log(car1.status());

//N4
const addAsync =(num1, num2)=>{
    return new Promise((resolve, reject)=>{
        if(num1 && num2){
            resolve(num1+num2);
        }else{
            reject('input correct values');
        }
    });
};

addAsync(1,2)

.then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

abstract class Vehicle{
    // private make:string;
    // private model:string; 
    // private year:number;
    // private rented:boolean
      constructor(
        private _make:string,
        private _model:string, 
        private _year:number,
        private _rented:boolean
    ){
        // this.make=_make
        // this.model=_model
        // this.year=_year
        // this.rented=_rented
    }
    get make(){
        return this._make
    }
    get model(){
        return this._model
    }
    get year(){
        return this._year
    }
    get rented(){
        return this._rented
    }
    set rented(newwValue:boolean){
        if(!newwValue){
            throw new Error('No Rented value found')
        }
        this._rented=newwValue
        
    }
    abstract rentalRate():number
    rent(){
        if(this._rented){
            console.log(this.make + ' ' + this.model + ' not available')
        }
        this._rented=true
    }
    return(){
        if(this._rented){
            console.log('You Returnned '  + this.make  + ' ' + this.model  + ' Thank you for using our service')
            this._rented=false
        }
    }
}
class Car extends Vehicle{
    constructor(
        make:string,
        model:string, 
        year:number,
        rented:boolean,
        private color:string
    ){
        super(make,model,year,rented)
        
    }
    rentalRate(){
        return 11500
    }
}
class MotorCycle extends Vehicle{
    constructor(
        make:string,
        model:string, 
        year:number,
        rented:boolean,
    ){
        super(make,model,year,rented)
        
    }
    rentalRate(){
        return 3000
    }
}

class Truck extends Vehicle{
    constructor(
        make:string,
        model:string, 
        year:number,
        rented:boolean,
    ){
        super(make,model,year,rented)
        
    }
    rentalRate(){
        return 15000
    }
}

// const car=new Vehicle('Suzuki','Alto',2002,true)
// console.log(car)
const bike1=new MotorCycle('Suzuki','150',2014,true)
const bike2=new MotorCycle('Suzuki','110',2023,false)
const car1=new Car ('Toyota','Corolla',2017,true,'White')
const car2=new Car ('Dhaistu','Mira',2012,false,'Red')


bike1.rent()
bike2.rent()
bike1.return()
bike1.rent()
console.log('Rental Rate ' , bike1.rentalRate())
bike2.rent()

console.log('Rental Rate ' , car1.rentalRate())
car1.rent()
car1.return()
car2.rent()
car2.rent()
car1.return()


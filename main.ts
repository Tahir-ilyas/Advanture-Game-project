#!/usr/bin/env node
import inquirer from "inquirer" 

class Player{
    name:string;
    fuel:number = 100
    constructor(name:string){
        this.name = name
    }
     fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
     }
     fuelIncrease(){
        this.fuel = 100
     }
}
class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecreass(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    }
    let player = await inquirer.prompt([
        {
            name:"name",
            type:"input",
            message:"Enter your name"   
        }
 ]);
 let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Select opponent",
        choices: ["Skeleton","Alien","Zombie"]
    }
 ]);

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if(opponent.select == "Skeleton"){
        }
        // Alien
        if(opponent.select == "Alien" ){
            }
            // Zombie
            if(opponent.select == "Zombie"){
                
            }
        
        let ask = await inquirer.prompt([
            {
                name:"option",
                type:"list",
                message: "what do you want to do? ",
                choices: ['Attack','Drink Portion','Run For Your Life']

            }
        ]);
        if(ask.option === 'Attack'){
            let num = Math.floor(Math.random()* 2) 
            if(num > 0){
                p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel <=0){
                console.log("You loose, Better luck next time");
                process.exit()
            }
        
            }
        
        if(num <= 0){
            o1.fuelDecreass()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(o1.fuel <=0){
                console.log("You win")
                process.exit()
            }
       
        }
        if(ask.option === 'Drink Portion' ){
            p1.fuelIncrease()
            console.log(`you drink health portion is ${p1.fuel}`);
        }
        if(ask.option === 'Run For Your Life'){
            console.log("You loose, Better luck next time");
            process.exit();

        }
        
    }
    
}

while(true)


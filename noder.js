//Enables you to use your file system functions in NodeJS
const fs = require("fs")


function problem1(){
    console.log("This is synchronous")
    // Waits 2 seconds and after all the tasks in the stack are done.
    setTimeout(async()=>{
        console.log("This is asynchronous")
    },2000)
    console.log("End of Script")
}
// problem1()
    
function problem2(){
    // repeats message every 3 seconds for 10 seconds. 
    let interval = setInterval(()=>{
        console.log("Repeating message...")
    },3000)
    setTimeout(()=>{
        clearInterval(interval)
    
    }, 10000)
}

// problem2()
function problem3(){
    // Grabs the input.txt file, puts it in a variable and prints it out syncrhnously and asynchrously. 
    let input = fs.readFileSync("input.txt", "utf8")
    setTimeout(()=>{
        console.log(input + "Async")
    },3000)
        console.log(input + "synchronus")
}
//This should print out synchrnous and then asyncrhonous next
// problem3()

function problem4(){
    let data = fs.readFileSync("data.txt", "utf8")
    console.log(data)
    setTimeout(()=>{
        console.log("Starting async operation...")
        console.log(fs.readFileSync("asyncData.txt", "utf8"))
    },2000)
    console.log("Script complete")
}
// problem4()

function problem5(){
    // Fills up the stack so that the other parts have to wait until its over. 
    console.log("Countdown initiated...");

    for(let i = 0; i < 4500000000; i++) {

    }
    
    let x = 10;
    
    let interval = setInterval(() => {
        console.log(x);
        x = x - 1;

        if (x < 0) {
            clearInterval(interval);
            setTimeout(() => {
                console.log("Liftoff")
                
            },1000);
        }
    }, 1000); 
}

// problem5();

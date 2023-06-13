// A. Variables & Datatypes
        //1. How do we assign a value to a variable?
        //1A. by making it = to let/var

        //2. How do we change the value of a variable?
        //2A. We can reassign the value of a variable in another line of code

        //3. How do we assign an existing variable to a new variable?
        //3A. We can add it to the variable with a function

        //4. Remind me, what are declare, assign, and define?
        //4A. Declare a value would be saying what the value is in a variable 
        //Assigning a value is making a variable = to something.
        //Defining a variable would be saying what the variable is, and describing it to the computer
        
        //5. What is pseudocoding and why should you do it?
        //5A. Planning out your code with normal writing, diagrams, etc

        //6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
        //6A. 90% thinking about it, 10% doing it

//B. Strings
// let firstVariable = "Hello World";
//     firstVariable = 8

//     secondVariable = firstVariable
//     secondVariable = "Per Scholas"

//     console.log(firstVariable);

// let yourName = "Carl"


// console.log("Hello, my name is " + yourName);

//C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

//D. The Farm

// let animal = "skateboarding cow";
// if (animal === "cow"){
//     console.log("Moo!");
// } else {
//     console.log("Thats not a cow!");
// }


//E. Driver's Ed
    // let age = 16
    // if (age >= 16){
    //     console.log("Time to drive!");
    // } else {
    //     console.log("No driving for you!");
    // }

//Loops
    //Loops A
    //1.
    // for (let i = 0; i <= 10; i++){
    //     console.log(i);
    // }
    // //2.
    // for (let i = 10; i <= 400; i++){
    //     console.log(i);
    // }
    // //3.
    // for (let i = 12; i <= 4000; i+=3){
    //     console.log(i);
    // }
    
    //Loops B
    //1. 
    // for (let i = 0; i <= 100; i++){
    //     if(i % 2 == 0){
    //         console.log(`${i} is even`); 
    //     }else{ 
    //         console.log(i)
    //     }
    // }
    
    //Loops C
    //     for (let i = 0; i <= 100; i++){
    //     if(i % 5 == 0){
    //         console.log(`${i} is a multiple of 5`); 
    //     }if(i % 3 == 0){
    //         console.log(`${i} is a multiple of 3`);
    //     }else{ 
    //         console.log(i)
    //     }
    // }

    //Loops D
    // let bank_Account = 0
    // for (let i = 1; i <= 10; i++){
    // //     bank_Account += i;
    // }
    // // console.log(bank_Account)

    // for (let i = 0; i<= 100; i++){
    //     bank_Account += i*2
    // }
    // console.log(bank_Account);


//Arrays

    //Arrays A
    //1. things in Arrays are called indexs
    //2. Yes, until you move them around
    //3. A stack of plates

    //Arrays B
// let quotes = ["You lookin' at me?", "Wise guy, eh?", "Zoinks!"]
    //Arrays C
    // const randomThings = [1, 10, "Hello", true]
    // console.log(randomThings[0]);
    // console.log(randomThings[2] = "World");
    
    //Arrays D
    // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
    // console.log(ourClass[2]);
    // console.log(ourClass[4]="Octocat");
    // ourClass.push("Cloud City")
    // console.log(ourClass[5]);

    //Arrays E
    // const myArray = [5, 10, 500, 20]
    // myArray.push("Aegon", 7)
    // console.log(myArray);
    // myArray.shift(myArray)
    // console.log(myArray);
    // myArray.unshift("Bob Marley")
    // myArray.reverse()
    // console.log(myArray);
    //Arrays F (though we arent doing arrays in this one?)
// let variable = 1
// if (variable <= 100){
//     console.log("Little number")
// }else{
//     console.log("Big number")
// }

    //Arrays G
// let variable = 6
// if (variable <= 5){
//     console.log("Little number")
// }else if (variable >= 10){
//     console.log("Big number")
// } else {
//     console.log("monkey");
// }

    //Arrays H
    // const kristynsCloset = [
    //     "left shoe",
    //     "cowboy boots",
    //     "right sock",
    //     "Per Scholas hoodie",
    //     "green pants",
    //     "yellow knit hat",
    //     "marshmallow peeps"
    // ];
    
    //   // Thom's closet is more complicated. Check out this nested data structure!!
    // const thomsCloset = [
    //     [
    //       // These are Thom's shirts
    //     "grey button-up",
    //     "dark grey button-up",
    //     "light blue button-up",
    //     "blue button-up",
    //     ],[
    //       // These are Thom's pants
    //     "grey jeans",
    //     "jeans",
    //     "PJs"
    //     ],[
    //       // Thom's accessories
    //     "wool mittens",
    //     "wool scarf",
    //     "raybans"
    //     ]
    // ];

    // console.log("Kristyn is wearing a " + kristynsCloset[2] + " today");
    // kristynsCloset.pop()
    // kristynsCloset.push("raybans")
    // console.log(kristynsCloset);
    // console.log(kristynsCloset[5]="stained knit hat");
    // console.log(thomsCloset[0][0]);
    // console.log(thomsCloset[1][0]);
    // console.log(thomsCloset[2][0]);
    // console.log("Thom is wearing a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and a " + thomsCloset[2][0] + ".") ;
    // console.log(thomsCloset[1][0] = 'silk pajama pants');
    // console.log("Thom is wearing a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and a " + thomsCloset[2][0] + ".")

    //Functions

    //Functions A
// const printGreeting = (name) => {
//     console.log("Hello there, " + name );
// }
// printGreeting("Kenobi")

    //Functions B
// const printCool = (name) => {
//     console.log(name + " is cool");
// }
// printCool("Carl")

    //Functions C
//     const calculateCube = (volume) => {
//         return (volume * 25)
//     }
// console.log(calculateCube(5))

    //Functions D
// const isVowel = (char) => {
// vowel = ['a', 'i', 'e', 'o', 'u'];
// return vowel.includes(char);
// }
// console.log(isVowel('a'));

    //Functions E
//write a function that accepts two parameters
//return number array where each number is length of strings

// const getTwoLengths = (name1, name2) => {
//     let myArray = [];
//     for(let i = 0; i <= name1.length; i++){
//         if(i === name1.length){
//             myArray.push(i)
//         }
//     }
//     for(let i = 0; i <= name2.length; i++){
//         if(i === name2.length){
//             myArray.push(i)
//         }
//     }
//     return myArray
// }

// console.log(getTwoLengths("Bob", "Hank"));

    //Functions F
//     const getMultipleLengths = (array) => {
//         const results = [];
//         for(let i=0; i<array.length; i++){
//         //see operator precedence
//         results.push(array[i].length);
//     }
//     return results;
// }

//     console.log(getMultipleLengths(["Manara", "Jordan", "Carl", "Chris"]))

    //Functions G
    // const maxofThreeNumbers = (x, y, z) => {
//     if (x >= y) {
//         return x;
//     } 
//     else if (x >= y) {
//         return y;
//     } 
//     else {
//         return z;
//     }
// }

// console.log(maxofThreeNumbers(1,2,3));

    //Functions H

// var longestString = ["one", "seven", "twenty-five"];
// var longest = longestString.reduce((a, b) => a.length > b.length ? a : b, '');
// console.log(longest);

//Objects

    //Objects A
    let user = {
        name: 'Test',
        email: 'test@email.com',
        age: 20,
        purchased: [],
    }
    //Objects B    
    // user.email = "test2@bemail.com"
    // console.log(user);

    // user.age++
    // console.log(user);

    //Objects C

    // user.location = "Bohemia"
    // console.log(user);

    //Objects D
    // user.purchased.push("carbohydrates")
    // user.purchased.push("peace of mind")
    // user.purchased.push("Merino jodhpurs")
    // console.log(user.purchased[2]);

    //Objects E

    user.friend = {
        name: "Unit",
        age: 20,
        location: 'New York',
        purchased: [],
    }

    // console.log(user.friend.name);
    // console.log(user.friend.location);
    user.friend.age = 55
    // console.log(user.friend);
    // user.friend.purchased.push("The One Ring")
    // user.friend.purchased.push("A latte")
    // console.log(user.friend.purchased[1]);

    //Objects F
    // const purchases = (array) => {
    //             const results = ;
    //             for(let i=0; i< 1; i++){
    //             //see operator precedence
    //             results.push(array);
    //         }
    //         return results;
    //     }
        
    //         console.log(purchases(user.purchased))
    //         console.log(purchases(user.friend.purchased))

    //Objects G
const updateUser = () => {

}
console.log();
// const oldAndLoud = (person) => {}

//Cat Combiner

//Mama Cat object (cat1) = name, breed, age | log age + breed
//Papa Cat object (cat2) = name, breed, age

//combineCats function with parameters mama + papa.
//Pass cat1 and cat2 through function
//combineCats(cat1, cat2) or
//combineCats ({name: Cat, age: Cat, breed: Cat}, {name: Cat, age: Cat, breed: Cat})
//function should return a combo of the cat names, age 1, and mix breed
//do function again as log(combineCats(combineCats(cat1,cat2), combineCats(cat1, cat2))
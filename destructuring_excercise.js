//Object Destructuring 1
//What does the following code return/print?
//8
//1846

//Object Destructuring 2
//What does the following code return/print?
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3
//What does the following code return/print?
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

//Array Destructuring 1
//What does the following code return/print?
// Maya
// Marisa
// Chi

//Array Destructuring 2
//What does the following code return/print?
// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3
//What does the following code return/print?
//[10, 30, 20]

//ES2015 Assigning Variables to Object Properties
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]


//raceResults()

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
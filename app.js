console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i= 1; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`)
    }
    else if (i % 3 == 0){
        console.log(`${i} FIZZ`)
    }
    else if (i %  5 == 0){
        console.log(`${i} BUZZ`)
    }
    else 
    console.log(i)
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("WHILE SECTION")
console.log("EXERCISE 1 WITH WHILE:")
let i = 1
while (i < 100){
    if (i % 2 != 0){
        console.log(i)
    }
    i++
}
console.log("EXERCISE 2 WITH WHILE:")
i = 1
while (i < 100){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`)
    }
    else if (i % 3 == 0){
        console.log(`${i} FIZZ`)
    }
    else if (i %  5 == 0){
        console.log(`${i} BUZZ`)
    }
    else 
    console.log(i)
i++
}
console.log("DO/WHILE SECTION")
console.log("EXERCISE 1 WITH DO/WHILE:")
i = 1
do {
    if (i % 2 != 0){
        console.log(i)
    }
    i++
} while (i < 100)
console.log("EXERCISE 2 WITH DO/WHILE")
i = 1
do{
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`)
        i++
    }
    else if (i % 3 == 0){
        console.log(`${i} FIZZ`)
        i++
    }
    else if (i %  5 == 0){
        console.log(`${i} BUZZ`)
        i++
    }
    else 
    console.log(i)
    i++
} while(i < 100)
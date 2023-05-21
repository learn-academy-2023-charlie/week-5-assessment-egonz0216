// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// PseudoCode:
    // Input: a string
    // output:a modified string of the same length
    // process: iterate through the string with a for loop, and set conditions so that when a character at any particular index equals either "a", "e, "i", or "o", that value is replaced with the number that is specified in the prompt. When searching for the value to match, use .toLowerCase() to account for different casings in the word. Use the .replace() method, which takes in two parameters, the value that we want to change, and the value that we want to change it to.  

// a) Create a test with expect statements using the variables provided.


describe("codedMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
    it("takes in a string and returns a string with a coded message", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a string with a coded message (2 ms)
// ● codedMessage › takes in a string and returns a string with a coded message
//   ReferenceError: codedMessage is not defined




// b) Create the function that makes the test pass.
const codedMessage = (str) => {
    for(let i =0; i<str.length; i++){
        if(str[i].toLowerCase() === "a"){
            str = str.replace(str[i], 4)  
        }else if(str[i].toLowerCase() === "e"){
            str = str.replace(str[i], 3)
        }else if(str[i].toLowerCase() === "i"){
            str = str.replace(str[i], 1)
        }else if(str[i].toLowerCase() === "o"){
            str = str.replace(str[i], 0)
        }
    }
    return str
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (3 ms)




// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// PseudoCode:
    // Input: An array of words, and a string consisting of a single letter
    // Output: A possibly-shortened array that includes only the words from the original array that have a letter that matches the one (regardless of casing) provided in the string.
    // Create an empty array in which to push the matching values to, which is also what gets returned by the function. Then create a for loop that iterates through the array of words, and set conditions with "if" statements that check if each word at every index includes the letter in the given string. We account for casing by including .toLowerCase(). If the character from the string is inlcuded in the word, push it to the new array.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]


describe("filterArr", () => {
    const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(filterArr(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(filterArr(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (3 ms)
// filterArr
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//   ReferenceError: filterArr is not defined



// b) Create the function that makes the test pass.

const filterArr = (arr, str) => {
    newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase().includes(str)){
            newArr.push(arr[i])
        }
    }return newArr
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (3 ms)
// filterArr
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// PseudoCode:
    // Input: an array of numbers
    // output: boolean value (true of false)
    // Process: Create a for loop to iterate through the array. Then use the sort method to order the hand in ascending order. With the array sorted, we can make test conditions for if the first 2 indexes are identical, and conditions to check if the remaining 3 indexes are identical and dissimilar to the first two. We check for these conditions by chaining the use of the logical and (&&) 

    
    describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
    const hand5 = [3, 3, 3, 5, 5]
        // Expected Output: true
        it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
                expect(fullHouse(hand1)).toEqual(true)
                expect(fullHouse(hand2)).toEqual(false)
                expect(fullHouse(hand3)).toEqual(false)
                expect(fullHouse(hand4)).toEqual(true)
            })
        })
        
        
        // FAIL  ./code-challenges.test.js
        //   codedMessage
        //     ✓ takes in a string and returns a string with a coded message (2 ms)
        //   filterArr
        //     ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)
        //   fullHouse
        //     ✕ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)
        //     ReferenceError: fullHouse is not defined
        
        // b) Create the function that makes the test pass.
        
        
        // const fullHouse = (arr) => {
        //     for(let i = 0; i<arr.length; i++){
        //         arr.sort()
        //         if((arr[0] === arr[1] && arr[2] === arr[3] && arr[3] === arr[4]) || (arr[0] === arr[1] && arr[1] === arr[2] && arr[3] === arr[4])){
        //             return true
        //         } else
        //             return false
        //     }
        // }

// Refactored with ternary operator:

  const fullHouse = (arr) => {
    for(let i = 0; i<arr.length; i++){
        return (arr[0] === arr[1] && arr[2] === arr[3] && arr[3] === arr[4]) ? true 
               :(arr[0] === arr[1] && arr[1] === arr[2] && arr[3] === arr[4]) ? true : false
    }
  }

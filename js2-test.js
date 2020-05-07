// Name:
// Class:

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'
*/

function logObj(obj) {
    for (let i = 0; i < obj.length; i++) {
        return `${obj[i]} is ${obj[i]} and works as an ${obj[i]}`;
    }
}
let objectInfo = { name: 'Noer', age: 28, job: 'Education Directo' };
console.log(logObj(objectInfo));


/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/

function logNumbers(start, end) {
    for (let index = start; index <= end; index++) {
        console.log(index);
        if (index % 3 === 0) {
            console.log('Fizz');
        } else if (index % 5 === 0) {
            console.log('Buzz');
        } else if (index % 5 === 0 && index % 3 === 0) {
            console.log('FizzBuzz');
        }
    }
}
logNumbers(1, 15);

// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers 
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [1, 2, 3, 4]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/

function toNumbers(str) {
    const arr = [];
    str.map((letter, index) => {
        arr.push(index);
    });
    console.log(arr);
}
const letters = ['a', 'b', 'c', 'd'];
toNumbers(letters);

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't
  
      Target the '#root' element in 'index.html'.
      Use the following object: 
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/

function injectBooksToDOM(books) {
    let root = document.getElementById('root');
    books.forEach(book => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = book.bookName;
        root.append(ul);
        ul.appendChild(li);
    });
}

const books = [{
        bookName: "The Nature of Software Development",
        author: "Ron Jeffries",
        coverURL: "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
        bookName: "Clean Code",
        author: "Robert Cecil Martin",
        coverURL: "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
    }
];
injectBooksToDOM(books);

/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)

function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test(); // ?
*/
/*
Answer: console.log('six') and console.log('one') are printed first because
they are outside the scope of the setTimeout,
and then console.log('four') and console.log('two') are printed, 
they  are the second in the call stack.
the console.log('five') and console.log('three') will be the last printed consoles.
because they are the last in the call stack, 
and they have to wait 1 second to be executed
*/
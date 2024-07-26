import React, { useRef, useState, useEffect } from 'react'

const CountRef = () => {
    const prevCountRef = useRef();
    const [count, setCount] = useState(0);

    let numbers = "9010943718";
    let attempt1 = numbers.length;
    let attempt2 = numbers.slice(-4).padStart(attempt1, "*");
    console.log("sadff",attempt2);

    let numbers1 = "9010943718";
let lastFourDigits = numbers1.slice(-4);
let maskedString = "$".repeat(numbers1.length - 4) + lastFourDigits;
console.log("ghyt",maskedString);
    

    const originalString = "hello";
const paddedString = originalString.padStart(9, "12345");

console.log("fdsfdsf",paddedString); // Outputs: "12345hello"

    useEffect(() => {
        prevCountRef.current = count;
    });

    const prevCount = prevCountRef.current;

    return (
        <div>
            <h5>{attempt2}</h5>

            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCount}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}

export default CountRef

// import React, { useRef, useState } from 'react';

// function MyComponent() {
//   const prevCountRef = useRef();
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     prevCountRef.current = count;
//   });

//   const prevCount = prevCountRef.current;

//   return (
//     <div>
//       <p>Current Count: {count}</p>
//       <p>Previous Count: {prevCount}</p>
//       <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
//     </div>
//   );
// }

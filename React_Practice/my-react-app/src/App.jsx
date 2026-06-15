//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Student from './student.jsx'

// // function App() {
// //   return (
// //     <div>
// //       <h1>Hello Sneha!</h1>
// //       <p>My first React app</p>
// //     </div>
// //   );
// // }
// //export default App;
// props
// function App(){
//   return(
//     <div>
//     <Student name = "Spongebob" />
//     <Student name = "swiggy" age = {30} />
//      <Student name = "swiz"/>
//      </div>
//   )
// }

// export default App

// import { useState } from "react";

// // function Student(props) {
// //   const [marks, setMarks] = useState(80);

// //   return (
// //     <div>
// //       <h2>{props.name}</h2>
// //       <p>Marks: {marks}</p>

// //       <button onClick={() => setMarks(marks + 5)}>
// //         Add Marks
// //       </button>
// //     </div>
// //   );
// // }

//use state and props
// import { useState } from "react";

// function Student(props) {
//   const [marks, setMarks] = useState(80);

//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Marks: {marks}</p>

//       <button onClick={() => setMarks(marks + 5)}>
//         Add Marks
//       </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Student name="Sneha" />
//     </div>
//   );
// }

//export default App;

// import {useState,useEffect} from "react";

// function App(){
//   const [ count,setCount] = useState(0);

//   useEffect(() => {
//     console.log(count);
//     document.title = `count : ${count}`;
//   },[]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick = {() => setCount (count +1)}>Increase</button>
//     </div>
//   );

// }
// export default App;

// event Handling in JS
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//   });

//   const handleClick = () => {
//     alert("Hey I am clicked");
//     setCount(count + 1);
//   };

//   // const handleMouseOver = () => {
//   //   alert("Hey I am a mouse over");
//   // };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <div className="button">
//         <button onClick={handleClick} onMouseOver={handleMouseOver}>
//           Click Me
//         </button>
//       </div>

//       <h2>Count: {count}</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Enter Name"
//         value={form.name}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="phone"
//         placeholder="Enter Phone"
//         value={form.phone}
//         onChange={handleChange}
//       />

//       <h3>Name: {form.name}</h3>
//       <h3>Phone: {form.phone}</h3>
//     </>
//   );
// }

// export default App;
// conditional rendering

// import {useState} from "react";

// function App(){
//   const [showPassword , setShowPassword] =
//     useState(false);

//   return (
//     <div>
//       <input
//       type = {showPassword ? "text": "password"}
//       placeholder = "password"/>
//       <button onClick={() =>
//         setShowPassword (!showPassword)
//       }
//       >
//         {showPassword ? "Hide" : "show"}
//       </button>
//       </div>
//   );
// }
// export default App;

//list and conditional rendering
// function App() {
//   const products = [
//     { id: 1, name: "Laptop", stock: true },
//     { id: 2, name: "Mouse", stock: false },
//     { id: 2, name: "Speaker", stock: false },
//   ];

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>

//           {product.stock ? <p>Available</p> : <p>Out of Stock</p>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//profile components
// import Profile from "./profile";


// function App() {
//   return (
//     <div>
//       <Profile name="chaya" department="IT" />
//       <Profile name = "Sneha" department = "IT"/>
//       <Profile name = "Pranavi" department = "marketing"/>
//       <Profile name = "Dhanya" department = "AI"/>
//       <Profile name = "chandana" department = "Sales"/>
//     </div>
//   );
// }

// export default App;


import Student from "./Student1";

function App() {
  return (
    <div>
      <Student studentName="Rahul" course="MERN" />
      <Student studentName="priya" course="MERN" />
    </div>
  );
}

export default App;
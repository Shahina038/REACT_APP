import React from 'react'

function Counter(props) {
   const {title,count} = props
   return (
     <div>
     <h1>Counter: {props.count}</h1> 
     {/* <h1>{title} {count}</h1> */}
           </div>
  )
}










// show/Hide
// function Counter() {
//   const [count,setCount] = useState(0)
//   const [count1,setCount1] = useState(0)

//   useEffect(()=>{
//     console.log('Mounting...');
//     console.log('Count'+count);
//     console.log('Count1'+count);
//     // return ()=>{
//     //   console.log('Unmounting...');
//     //   console.log('Cleanup'+count);
//     // }

//   },[count,count1])
//   // const [count,setCount] = useState(0)
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <h1> Hello I am Component: {count}</h1>

//       <button onClick={()=>setCount1(count1+1)}>Increment</button>
//       <h1> Hello I am Component 1: {count1}</h1>
//     </div>
//   )
// }
// show/hide

// function Counter({title,count}) {
//   return (
//     <div>
//       {/* <h1>Counter: {props.count}</h1> */}
//       <h1>{title} {count}</h1>
      

//     </div>
//   )
// }

export default Counter
import React,{useState} from 'react'

// function StateHooks(){

//     const [answer] = useState("Fine")

//     return(
//         <div>
//             <p>How are you brother ? {answer}</p>
//         </div>
//     )
// }

function StateHooks(){

    const [count,setCount] = useState(0)

    function multiply(){
        setCount(prevCount=>prevCount*2)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>
            <br />
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <br />
            <button onClick={multiply}>Multiply by 2</button>
        </div>
    )
}

export default StateHooks
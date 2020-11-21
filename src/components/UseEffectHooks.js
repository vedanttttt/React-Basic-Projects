import React,{useState,useEffect} from 'react'
import randomcolor from 'randomcolor'

function UseEffectHooks(){

    const [count,setCount] = useState(0)
    const [color,setColor] = useState("")

    useEffect(()=>{
        setColor(randomcolor())
    },[count])

    return(
        <div>
            <h1 style={{color:color}}>{count}</h1>
            <button onClick={()=>setCount(prevState => prevState+1)}>Increment</button>
        </div>
    )
}

export default UseEffectHooks
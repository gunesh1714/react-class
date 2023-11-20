import React,{useState} from 'react'

export default function Use_State_Method() {
    const [col,setCol]=useState("Skcet")
  return (
    <div>
        <h1>My college is {col}</h1>
        <button onClick={()=>setCol("ARM")}>Click Me!</button>
    </div>
  )
}

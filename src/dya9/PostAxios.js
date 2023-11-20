import React, { useState } from 'react'
import axios from 'axios';

export default function PostAxios() {
    const [name,setName]=useState("")
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/users',{name})
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleChangeName}></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
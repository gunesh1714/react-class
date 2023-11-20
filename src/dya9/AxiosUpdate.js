import React, { useState } from 'react'
import axios from 'axios';

export default function AxiosUpdate() {
    const [name,setName]=useState()
    const handleUpdateId=(e)=>{
        setName(e.target.value);
    }
    const handleSubmitName=(e)=>{
        e.preventDefault();
        axios.update(`http://localhost:3000/users/${name}`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
        <form onSubmit={handleUpdateId}>
            <input type='text' onChange={handleSubmitName}></input>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}
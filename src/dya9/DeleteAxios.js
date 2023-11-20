import React, { useState } from 'react'
import axios from 'axios';

export default function DeleteAxios() {
    const [id,setId]=useState()
    const handleDeleteId=(e)=>{
        setId(e.target.value);
    }
    const handleSubmitId=(e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmitId}>
            <input type='text' onChange={handleDeleteId}></input>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}
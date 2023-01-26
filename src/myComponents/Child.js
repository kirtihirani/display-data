import React, { useEffect, useState } from 'react'


export default function Child({handleClick}) {
    const [user, setUser] = useState([]);

    const fetchData = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        setUser(await response.json());
        
    } 
    
setTimeout(()=>{
    handleClick(user)
},[100])

    useEffect(()=>{
        fetchData();
       // handleClick(user);
    },[])

    
        
  return (
    <div>
        
    </div>
  )
}

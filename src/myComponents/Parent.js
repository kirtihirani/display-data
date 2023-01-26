import React, { useState } from 'react'
import './Parent.css'
import Child from './Child'


export default function Parent() {


  const [userData, setUserData] = useState([]);
  const [display, setDisplay] = useState([]);

  const handleClick = (childData) => {
    setUserData(childData)
  }

  const onclickk = () => {
    setDisplay(userData)
  }

  return (

    <div>

      <Child handleClick={handleClick} />

      <button onClick={onclickk}>
        Click me to View data
      </button>

      <table style={{ width: "100%" }}>
        <tr>
          <th>"User Id"</th>
          <th>"Id"</th>
          <th>"Title"</th>
          <th>"Body"</th>
        </tr>
        {display.map(item =>
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        )}



      </table>
    </div>
  )
}

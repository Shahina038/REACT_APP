import React from 'react'
import { useState } from 'react';
export default function Color() {
    const [color, setColor] = useState("red");
  return (
    <div>
        <h1>My Color is: {color}</h1>
        <button type = "button" onClick={()=>setColor("blue")}>blue
        </button>

        <button type = "button" onClick={()=>setColor("red")}>red
        </button>

        <button type = "button" onClick={()=>setColor("pink")}>pink
        </button>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

export default function Car() {
    const [brand, setBrand] = useState("Ford");
    const [modal, setModal] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
  return (
    <div>
        <h1>My brand {brand}</h1>
        <p>
            It is a {color} {modal} from {year}        </p>
    </div>
  )
}

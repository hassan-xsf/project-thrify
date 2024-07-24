import React from 'react'
import { forwardRef } from 'react'


function Input({label = "", className = "" , placeholder,type = "text",...props} , ref) {
  return (
    <>
        {label && <label className = "text-xs font-bold text-gray-700">{label} </label>}
        <input ref = {ref} className = {`font-sans text-xs py-1.5 pl-1 mr-10 pr-2 w-full ring-1 outline-none ring-gray-300 rounded-md ${className}`} type = {type} placeholder = {placeholder} {...props}/>
    </>
  )
}

export default forwardRef(Input)
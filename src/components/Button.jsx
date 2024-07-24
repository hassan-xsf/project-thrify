import React from 'react'

function Button({children,className = "",...props}) {
  return (
    <button 
      className = {`bg-orange-300 rounded-md w-1/3 py-2 text-white font-bold tracking-normal drop-shadow-2xl ${className}`} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
import React from 'react'

const Quote = ({children}) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  )
}

export default Quote
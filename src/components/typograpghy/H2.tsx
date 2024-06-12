import React from 'react'

const H2 = ({children, ...props}) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      <span className={props.className}>{children}</span>
    </h2>
  )
}

export default H2
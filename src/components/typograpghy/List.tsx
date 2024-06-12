import React from 'react'

const List = ({children}) => {
  return (
    <>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {children}
    </ul>
    </>
  )
}

export default List
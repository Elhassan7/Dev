import React from 'react'

const page = ({params}) => {
  return (
    <div>{params.current_page}</div>
  )
}

export default page
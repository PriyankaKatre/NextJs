
import React from 'react'

const page = () => {

    const onClick = () => {
        console.log('hello')
    }
  return (
      <div onClick={ onClick}>
        folder page
    </div>
  )
}

export default page

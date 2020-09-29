import React from 'react'

const DisplayName = ({ name, sex }) => {
  return (
    <li className={sex}>
      {name}
    </li >
  )
}

export default DisplayName

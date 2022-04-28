
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, id }) => {

  const [btnState, setBtnState] = useState(false)

  const buttonPress = () => {
    setBtnState(!btnState)
    onClick(id)
  }

  return (
    <button className="btn" onClick={buttonPress}>{text}</button>
  )
}

// if it breaks it could be the id
Button.defaultProps = {
  text: "not Specified",
  id: null
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

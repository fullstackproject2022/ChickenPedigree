import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, className }) => {

  const [btnState, setBtnState] = useState(false)

  const buttonPress = () => {
    setBtnState(!btnState)
    onClick()
  }

  return (
    <button className={className} onClick={buttonPress}>{text}</button>
  )
}

Button.defaultProps = {
  text: "not Specified"
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

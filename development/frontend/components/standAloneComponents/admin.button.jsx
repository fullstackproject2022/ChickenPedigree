
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, id, setPagePanel, className }) => {

  const [btnState, setBtnState] = useState(false)


  const buttonPress = () => {
    setBtnState(!btnState)
    onClick(id);
    if (text === "update") {
      return (setPagePanel("UpdatePanel"));
    }
  }

  return (
    <button className={className} onClick={() => { buttonPress() }}>{text}</button>
  )
}

// if it breaks it could be the id
Button.defaultProps = {
  text: "not Specified",
  id: null,
  setPagePanel: null,
  className: "btn"
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button

import React from 'react'
import './Footer.css'

const Footer = (props) => (
  <div className="footerBar">
    <div className="footerBar-container">
        <p className="footerBar-container-copyright">{props.footer}</p>
    </div>
  </div>
)

export default Footer

import * as React from "react"
import "../styles/styles.css"

function TopNav(){
  return(
    <div className="header">
        <div className="site-info-container">
          <div className="name-version-container">
            <p className="site-name">Runi Baldvinsson</p>
            <p className="site-version">ver. 3.1</p>
            <p className="site-position">Partner & Head of Digital Experience @ USE</p>
          </div>
          <h1 className="site-title">A senior Digital Product Designer, who codes</h1>
        </div>
        {/* <div className="nav-container">
          <span>About me</span>
          <div className="contact-container">
            <button className="site-contact-button">Contact</button>
          </div>
        </div> */}
      </div> 

  )
}
export default TopNav;


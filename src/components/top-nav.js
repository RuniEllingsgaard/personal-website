import * as React from "react"
import "../styles/styles.css"

function TopNav(){
  return(
    <div className="header">
        <div className="site-info-container">
          <h1 className="site-title">A senior Digital Product Designer, who codes</h1>
          <div className="name-version-container">
            <p className="site-name">Runi Baldvinsson</p>
            <p className="site-version">ver. 3.1</p>
          </div>
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


import * as React from "react"
import "../styles/styles.css"
import TopNav from "../components/top-nav";
import FilterNav from "../components/filter-nav";



function contact() {
 

  return(
     <div className="app-container">
      <TopNav/>
      <FilterNav/>
      <div className="about-container">
      <p>Feel free to reach out on runibaldvinsson@gmail.com</p>
      </div>
     </div>
      )
}

export default contact;
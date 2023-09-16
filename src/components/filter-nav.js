
import * as React from "react"
import "../styles/styles.css"
import { Link } from "gatsby"

function FilterNav(){
  return(   
        <div className="filter-container">
          <ul className="filter-items">
          <Link to="/" activeClassName="filter-active"><li>Timeline</li></Link>
            <Link to="/about/" activeClassName="filter-active"><li>About</li></Link>
            <Link to="/contact/" activeClassName="filter-active"><li>Contact</li></Link>
          </ul>
        </div> 
  )
}
export default FilterNav;


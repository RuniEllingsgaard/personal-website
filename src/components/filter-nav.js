
import * as React from "react"
import { useState } from "react"
import "../styles/styles.css"
import { Link } from "gatsby"
import add from "../images/add.svg"

function FilterNav(){

const[menuOpen, setMenuOpen] = useState(false);

const openMenu = () =>{
  if(menuOpen){
    setMenuOpen(false);
  }
  else{
    setMenuOpen(true);
  }
  
  console.log("You clicked the menu");
}

  
  return(   
        <div className="filter-container">
          <ul className="filter-items">
           
            <Link className={menuOpen ? "" : "gone"} to="/" activeClassName="filter-active"><li>Timeline</li></Link>
            <Link className={menuOpen ? "" : "gone"} to="/about/" activeClassName="filter-active"><li>About</li></Link>
            <Link className={menuOpen ? "" : "gone"} to="/contact/" activeClassName="filter-active"><li>Contact</li></Link>
            <li onClick={openMenu} className="menu-toggle"><img className={menuOpen ? "rotate" : ""} src={add}></img>Menu</li>
          </ul>
        </div>
  )
}
export default FilterNav;


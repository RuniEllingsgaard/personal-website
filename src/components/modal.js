import * as React from "react"
import {useState} from "react"
import "../styles/styles.css"

function Modal(props) {
  const [hide, setHide] = useState(false);


  return (
    <div className={`modal ${hide ? "hide" : ""}`}>
        <div className="inner-modal">
          <button onClick={() => setHide(true)}>x</button>
          <h2 className="title-modal">Design system LEGO Education</h2>
          <p className="description-modal">Creating a single source of truth across experiences</p>
          <ul className="project-tags">
            <li>ux/ui</li>
            <li>stakeholder management</li>
            <li>research</li>
            <li>strategy</li>
          </ul>
          <p>Moji Sushi's ambition is to make affordable, tasty sushi for the masses. Today, their grab-and-go sushi is sold across the USA by retail giants Target, Walmart & Circle K.

USE Agency has supported the journey with everything from brand and web design to campaigns and events – among them the legendary Nascar race in Martinsville, Virginia.</p>
        </div>
      </div>
    
  )
}

export default Modal;
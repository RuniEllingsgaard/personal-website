import * as React from "react"
import {useState} from "react"
import "../styles/styles.css"


function Month(props) {
  const [hide, setHide] = useState(true);
  console.log(hide)
  return (
   
    <div className="month">

      <div className="date-container">
        <span className="date">{props.date}</span>
        <span className="year">{props.year}</span>
      </div>
       
      {/* -----------MODAL------------- */}
      <div className={`modal ${hide ? "hide" : ""}`}>
        <div className="info-section">
          <button className="modal-close-button" onClick={() => setHide(true)}>x</button>
          <h2 className="title-modal">Design system LEGO Education</h2>
          <p className="description-modal">Creating a single source of truth across experiences</p>
          <ul className="project-tags">
            <li>ux/ui</li>
            <li>stakeholder management</li>
            <li>research</li>
            <li>strategy</li>
          </ul>
          <div className="descriptions">
            <p>Brief</p>
            <p>{props.brief}</p>
        
            <p>Process</p>
            <p>{props.process}</p>
            
            <p>My Role</p>
            <p>{props.role}</p>
      
            <p>Team</p>
            <p>{props.team}</p>
          </div>
        </div>

        <div className="image-section">
          <div className="image-placeholder"></div>
          <div className="image-placeholder"></div>
          <div className="image-placeholder"></div>
          <div className="image-placeholder"></div>
        </div>
      </div>
      {/* -----------MODAL END------------- */}
  
          
      <div className="event-container">
        <div style={{backgroundColor: props.backgroundColor, backgroundImage: `url(${props.backgroundImage})`}} onClick={() => setHide(false)} onKeyDown={() => setHide(false)} role="presentation" className={`event ${props.fontColor} ${ props.row }`}>
          <div className="label">
            <span>{props.label}</span>
          </div>
          <div className="case-image-container">
            <img className="case-image" src={props.caseImage}></img>
          </div>
          <div className="title-container">
            <h3>{props.title}</h3>

            <div className="tag-container">
            <ul className="tag-list">
              <li className="tag-item">{props.tag}</li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
     </div>
  )
}

export default Month;
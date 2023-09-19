import * as React from "react"
import {useState} from "react"
import "../styles/styles.css"
import close from "../images/close.svg"


function Month(props) {
  const [hide, setHide] = useState(true);
  console.log(hide)
  return (
   
    <div className="month">

      <div className="date-container">
        <span className="date">{props.date}</span>
        <span className="year">{props.year}</span>
      </div>

      {/* <CaseModal state={hide} title={props.title} description={props.description} tags={props.tags} coverImage={props.coverImage} brief={props.brief} keyTakeAway={props.keyTakeAway} imageSectionOne={props.imageSectionOne} process={props.process} role={props.role} team={props.team} imageSectionTwo={props.imageSectionTwo}/> */}
       
      {/* -----------MODAL------------- */}
      <div className={`modal ${hide ? "hide" : ""}`}>
          <button className="modal-close-button" onClick={() => setHide(true)}><img src={close}></img></button>
          <div className="inner-modal">
          <div className="case-intro">
          <h2 className="title-modal">{props.title}</h2>
          <p className="description-modal">{props.description}</p>
          <ul className="project-tags">
            {Array.isArray(props.tags) && props.tags.length > 0 && (
              props.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))
            )}
          </ul>
          </div>

          <div className="hero-image-container">
            <img src={props.coverImage}></img>
          </div>
       
          <div className="case-text-container">
            <section className="case-text">
            <h3>Brief</h3>
            <p>{props.brief}</p>
            </section>
          </div>

          {props.keyTakeAway ? 
            <div className="case-text-container">
              <section className="case-text">
                <h3>Key Take Away</h3>
                <p>{props.keyTakeAway}</p>
              </section>
            </div> 
          : null}
          
          {props.imageSectionOne ? 
            <div className="image-grid">
              {Array.isArray(props.imageSectionOne) && props.imageSectionOne.length > 0 && (
                props.imageSectionOne.map((image, index) => (
                  <img src={image} alt={`Image ${index + 1}`} key={index} />
                  ))
              )}
            </div>
          : null}
          
        
        {props.process ? 
          <div className="case-text-container">
            <section className="case-text">
              <h3>Process</h3>
              <p>{props.process}</p>
            </section>
          </div> 
        : null}
          

        {props.role ? 
          <div className="case-text-container">
            <section className="case-text">
              <h3>My Role</h3>
              <p>{props.role}</p>
            </section>
          </div>
        : null}
          
      
        {props.team ? 
          <div className="case-text-container">
            <section className="case-text">
              <h3>Team</h3>
              <ul>
                {Array.isArray(props.team) && props.team.length > 0 && (
                  props.team.map((member, index) => (
                    <li>{member}</li>
                  ))
                )}
              </ul>
            </section>
          </div>
        : null}
          
       
        {props.imageSectionTwo ? 
          <div className="image-grid">
            {Array.isArray(props.imageSectionTwo) && props.imageSectionTwo.length > 0 && (
              props.imageSectionTwo.map((image, index) => (
                <img src={image} alt={`Image ${index + 1}`} key={index} />
              ))
            )}
          </div>
        : null}
          
        </div>
      </div>
      {/* -----------MODAL END------------- */}
      
      
      {/* -----------MODAL------------- */}
      {/* <div className={`modal ${hide ? "hide" : ""}`}>
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
      </div> */}
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

            {/* <div className="tag-container">
            <ul className="tag-list">
              <li className="tag-item">{props.tag}</li>
            </ul>
          </div> */}
          </div>
          
        </div>
      </div>
     </div>
  )
}

export default Month;
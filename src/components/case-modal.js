import * as React from "react"
import {useState, useEffect} from "react"
import "../styles/styles.css"
import close from "../images/close.svg"
import memiHero from "../images/MEMI-hero.png"


function CaseModal(props) {
  const [hideModal, setHideModal] = useState(true);



  useEffect(() =>{
    if(props.state === true){
      setHideModal(true);
      console.log("true");
    }
    else{
      setHideModal(false);
      console.log("false");
    }
  })

  const clickToHide = () =>{
    setHideModal(true);
  }

  

  return(
      <div className={`modal ${hideModal ? "hide" : ""}`}>
          <button onClick={clickToHide} className="modal-close-button"><img src={close}></img></button>
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

          <div className="case-text-container">
            <section className="case-text">
            <h3>Key Take Away</h3>
            <p>{props.keyTakeAway}</p>
            </section>
          </div>

          <div className="image-grid">
            {Array.isArray(props.imageSectionOne) && props.imageSectionOne.length > 0 && (
              props.imageSectionOne.map((image, index) => (
                <img src={image} alt={`Image ${index + 1}`} key={index} />
              ))
            )}
          </div>
        
          <div className="case-text-container">
            <section className="case-text">
            <h3>Process</h3>
            <p>{props.process}</p>
            </section>
          </div>

          <div className="case-text-container">
            <section className="case-text">
            <h3>My Role</h3>
            <p>{props.role}</p>
            </section>
          </div>
      
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
       

          <div className="image-grid">
            {Array.isArray(props.imageSectionTwo) && props.imageSectionTwo.length > 0 && (
              props.imageSectionTwo.map((image, index) => (
                <img src={image} alt={`Image ${index + 1}`} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
      )
}

export default CaseModal;
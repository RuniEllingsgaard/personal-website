import * as React from "react"
import "../styles/styles.css"
import TopNav from "../components/top-nav";
import FilterNav from "../components/filter-nav";



function about() {
 

  return(
     <div className="app-container">
      <TopNav/>
      <FilterNav/>
      <div className="about-container">
        <div>
          <p className="column-title">About me</p>
      <p className="description">I'm Runi Baldvinsson, a seasoned product designer with a keen enthusiasm for technology, people, and coding. For the last five years, I’ve proudly served as a partner and Head of Digital Experiences at USE agency. My professional mission is to craft impactful products that resonate with users, whether that impact is local or on a global scale.

<br></br><br></br>Hailing from the picturesque Faroe Islands, I now call Aarhus, Denmark, my home. In addition to my work, I'm a devoted father to two vibrant daughters who continually inspire me. I'm passionate about translating my love for technology and design into solutions that make a meaningful difference in people's lives. Please don’t hesitate to reach out 👋</p>
</div>
      <div>
      <p className="column-title">Competencies</p>
      <ul>
        <li>#user-experience design</li>
        <li>#user-interface design</li>
        <li>#user-research</li>
        <li>#testing</li>
        <li>#figma</li>
        <li>#prototyping</li>
        <li>#project-management</li>
        <li>#front-end-development</li>
        <li>#git</li>
        <li>#react</li>
        <li>#html</li>
        <li>#css</li>
        <li>#javascript</li>
        <li>#jamstack</li>
        <li>#creative-coding</li>
        <li>#p5.js</li>
        <li>#ml5.js</li>
        <li>#after-effects</li>
      </ul>
      </div>
      <div>
      <p className="column-title">Contact Information</p>
      <ul>
        <li>Email: <a href="mailto:runibaldvinsson@gmail.com">runibaldvinsson@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/runibaldvinsson/" target="blank">linkedin.com/in/runibaldvinsson</a> </li>
      </ul>
      </div>
      </div>
     </div>
      )
}

export default about;
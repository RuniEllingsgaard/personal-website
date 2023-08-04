import * as React from "react"
import "../styles/styles.css"
import Month from "../components/month"
import legologo from "../images/LEGO-logo.png"
import memi from "../images/MEMI-illu.png"
import lovefuelBG from "../images/lovefuel-bg.png"
import lovefuelLogo from "../images/lovefuel-logo.png"
import coCodersGradient from "../images/co-coders-gradient.png"
import ikeaLogo from "../images/ikea-logo.png"


const IndexPage = () => {

  return (
    <div className="app-container">
      <div className="header">
        <div className="site-info-container">
          <div className="name-version-container">
            <p className="site-name">Runi Baldvinsson</p>
            <p className="site-version">ver. 3.1</p>
          </div>
          <h1 className="site-title">I mostly design stuff on screens</h1>
        </div>
        <div className="nav-container">
          <span>About me</span>
          <div className="contact-container">
            <button className="site-contact-button">Contact</button>
          </div>
        </div>
      </div>

      {/* <div className="filter-container">
        <ul className="filter-items">
          <li className="filter-active">All</li>
          <li>Cases</li>
          <li>Thoughts</li>
          <li>Experiments</li>
        </ul>
      </div> */}

      <div className="calendar-container">

      <Month 
        date="July 14th."
        year="2023"
        backgroundColor="#E3000B"
        fontColor="bright"
        label="#case"
        caseImage={legologo}
        title="LEGO Collaboration"
        tag="#designsystem"
        row="three"
        brief="Since 2017 I have been a close collaborator at the LEGO Group, working with over 5 departments. My focus has been on digitizing internal workflows and tools, as well as concepting and designing new customer-facing experiences. While I am proud of this long partnership, I am currently unable to share further information."
        process=""
        role=""
        team="">
      </Month>

      <Month 
        date="July 14th."
        year="2023"
        backgroundColor="#fff"
        fontColor="dark"
        label="#case"
        caseImage={memi}
        title="Mediehusene Midtjylland"
        tag="#designsystem"
        row="one"
        brief="Mediehusene Midtjylland faced a customer decline issue as their readership aged, struggling to attract new and younger subscribers to their platform. The solution was to experiment with different digital formats."
        process="To contextualize the local newspapers, we conducted extensive user research in the surrounding areas to understand news consumption habits. This research formed the foundation for all future design efforts. We redesigned their online newspaper, launched 5+ local MVP micro online newspapers, and rebuilt their app from scratch. Mediehusene Midtjylland is still on their digital journey, working diligently to launch all of these efforts and embrace their digital transformation."
        role="I took charge of the overall UX and UI design, leading the project with workshops and user tests to ensure a seamless and user-centric experience."
        team="Ari Marteinsson - User Research, Niels Konrad Bisgaard - UX/UI, Melanie Nissen - UX/UI, Martyna Buje - Illustrations">
      </Month>

      <Month
        date="July 14th."
        year="2023"
        backgroundColor=""
        backgroundImage={lovefuelBG}
        fontColor="dark"
        label="#case"
        caseImage={lovefuelLogo}
        title="LoveFuel"
        tag="#designsystem"
        row="three"
        brief=""
        process=""
        role=""
        team="">
      </Month>

      <Month
        date="July 14th."
        year="2023"
        backgroundColor=""
        backgroundImage={coCodersGradient}
        fontColor="dark"
        label="#case"
        caseImage=""
        title="CoCoders"
        tag="#designsystem"
        row="two"
        brief=""
        process=""
        role=""
        team="">
      </Month>

      <Month
        date="July 14th."
        year="2023"
        label="#case"
        title="HRfamly"
        tag="#designsystem"
        row="two"
        brief=""
        process=""
        role=""
        team="">
      </Month>

      <Month
        date="July 14th."
        year="2023"
        label="#case"
        title="RENT"
        tag="#designsystem"
        row="one"
        brief=""
        process=""
        role=""
        team="">
      </Month>

      <Month
        date="July 14th."
        year="2023"
        backgroundColor="#0058AB"
        backgroundImage=""
        fontColor="bright"
        label="#case"
        caseImage={ikeaLogo}
        title="IKEA"
        tag="#designsystem"
        row="two"
        brief=""
        process=""
        role=""
        team="">
      </Month>


 

     

 

 




 

      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

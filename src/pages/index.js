import * as React from "react"
import "../styles/styles.css"
import Month from "../components/month"
import legologo from "../images/LEGO-logo.png"
import memi from "../images/MEMI-illu.png"
import lovefuelBG from "../images/lovefuel-bg.png"
import lovefuelLogo from "../images/lovefuel-logo.png"
import coCodersGradient from "../images/co-coders-gradient.png"
import ikeaLogo from "../images/ikea-logo.png"
import desktopMockup from "../images/memi/desktop-mockup.png"
import mobileMockup1 from "../images/memi/mobile-mockup-1.png"
import mobileMockup2 from "../images/memi/mobile-mockup-2.png"
import menuMockup from "../images/memi/menu-mockup.png"
import memiCover from "../images/memi/memi-cover.png"
import workshop from "../images/memi/workshop.png"
import research from "../images/memi/research.png"
import memiWireframes from "../images/memi/wireframes.png"
import codersCover from "../images/cocoders/cocoders-cover.png"
import codersLifestyle1 from "../images/cocoders/lifestyle1.png"
import codersDesktop from "../images/cocoders/desktop-mockup.png"
import codersCard from "../images/cocoders/card-mockup.png"
import codersLifestyle2 from "../images/cocoders/lifestyle2.png"
import codersMobile from "../images/cocoders/mobile-mockup.png"
import codersSearch from "../images/cocoders/search.png"
import codersButton from "../images/cocoders/button.png"
import codersColors from "../images/cocoders/colors.png"
import codersWireframes from "../images/cocoders/wireframes.png"
import codersInspiration from "../images/cocoders/inspiration.png"
import codersThumb from "../images/cocoders/coders-thumb.png"
import loveCover from "../images/lovefuel/cover.png"
import loveIcon from "../images/lovefuel/icon.png"
import loveScreens from "../images/lovefuel/screens.png"
import loveMock1 from "../images/lovefuel/mockup1.png"
import loveButton from "../images/lovefuel/button.png"
import loveSelect from "../images/lovefuel/select.png"
import loveDiagram from "../images/lovefuel/diagram.png"
import lovePost from "../images/lovefuel/post-its.png"
import loveWireframes from "../images/lovefuel/wireframes.png"
import rentDesktop from "../images/rent/desktop.png"
import rentOverview from "../images/rent/overview.png"
import rentBoxes from "../images/rent/boxes.png"
import rentMock1 from "../images/rent/mock1.png"
import rentCheckout from "../images/rent/checkout.png"
import rentLabel from "../images/rent/label.png"
import rentMock2 from "../images/rent/mock2.png"
import rentQuantity from "../images/rent/quantity.png"
import rentButton from "../images/rent/button.png"
import rentWireframes from "../images/rent/wireframes.png"



const IndexPage = () => {

  return (
    <div className="app-container">
      <div className="header">
        <div className="site-info-container">
          <div className="name-version-container">
            <p className="site-name">Runi Baldvinsson</p>
            <p className="site-version">ver. 3.1</p>
          </div>
          <h1 className="site-title">A senior Digital Product Designer, who codes</h1>
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
        description="LEGO Collaboration"
        tag=""
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
        coverImage={memiCover}
        title="Mediehusene Midtjylland"
        description="Mediehusene Midtjylland"
        tag=""
        row="one"
        imageSectionOne={[desktopMockup, mobileMockup1, mobileMockup2, menuMockup]}
        imageSectionTwo={[workshop, research, memiWireframes]}
        brief="Mediehusene Midtjylland faced a customer decline issue as their readership aged, struggling to attract new and younger subscribers to their platform. The solution was to experiment with different digital formats."
        process="To contextualize the local newspapers, we conducted extensive user research in the surrounding areas to understand news consumption habits. This research formed the foundation for all future design efforts. We redesigned their online newspaper, launched 5+ local MVP micro online newspapers, and rebuilt their app from scratch. Mediehusene Midtjylland is still on their digital journey, working diligently to launch all of these efforts and embrace their digital transformation."
        role="I took charge of the overall UX and UI design, leading the project with workshops and user tests to ensure a seamless and user-centric experience."
        team={["Ari Marteinsson - User Research", "Niels Konrad Bisgaard - UX/UI", "Melanie Nissen - UX/UI", "Martyna Buje - Illustrations"]}>
      </Month>

      <Month
        date="July 14th."
        year="2023"
        backgroundColor=""
        backgroundImage={lovefuelBG}
        imageSectionOne={[loveIcon, loveScreens, loveMock1, loveButton]}
        imageSectionTwo={[loveSelect, loveDiagram, lovePost, loveWireframes]}
        fontColor="dark"
        label="#case"
        caseImage={lovefuelLogo}
        coverImage={loveCover}
        title="LoveFuel"
        description="LoveFuel"
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
        caseImage={codersThumb}
        coverImage={codersCover}
        imageSectionOne={[codersLifestyle1, codersDesktop, codersCard, codersLifestyle2]}
        imageSectionTwo={[codersMobile, codersSearch, codersButton, codersColors, codersWireframes, codersInspiration]}
        fontColor="dark"
        label="#case"
        title="CoCoders"
        description="CoCoders"
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
        title="RENT by WhiteAway Group"
        imageSectionOne={[rentDesktop, rentOverview, rentBoxes, rentMock1, rentCheckout, rentLabel]}
        imageSectionTwo={[rentMock2, rentQuantity, rentButton, rentWireframes]}
        description="RENT"
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
        backgroundColor="#0058AB"
        backgroundImage=""
        fontColor="bright"
        label="#case"
        caseImage={ikeaLogo}
        title="IKEA"
        description="IKEA"
        tag="#designsystem"
        row="one"
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

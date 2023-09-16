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
import rentThumb from "../images/rent.svg"
import rentCover from "../images/rent/rent-cover.png"
import TopNav from "../components/top-nav"
import FilterNav from "../components/filter-nav"



const IndexPage = () => {
  return (
    <div className="app-container">
      <TopNav/>
      <FilterNav/>

      

      <div className="calendar-container">
      <Month 
        date="July 14th."
        year="2023"
        backgroundColor="#E3000B"
        fontColor="bright"
        label="#case"
        caseImage={legologo}
        title="LEGO Group"
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
        tags={["UX","UI","Concept Development", "Product Strategy", "User Testing", "Design System"]}
        fontColor="dark"
        label="#case"
        keyTakeAway ="Working with Mediehusene Midtjylland proved to me the significance of stakeholder management and internal buy-in when undertaking large-scale organizational digitalization projects. Aligning different teams within an organization can be challenging, but by treating it as one of our primary objectives and using asynchronous video updates, written meeting minutes, and workshops, we were able to cover substantial ground while keeping key stakeholders informed."
        caseImage={memi}
        coverImage={memiCover}
        title="Mediehusene Midtjylland"
        description="Breathing life into a struggling platform - Made at my time at USE Agency"
        tag=""
        row="one"
        imageSectionOne={[desktopMockup, mobileMockup1, mobileMockup2, menuMockup]}
        imageSectionTwo={[workshop, research, memiWireframes]}
        brief="Mediehusene Midtjylland faced a customer decline issue as their readership aged, struggling to attract new and younger subscribers to their platform. Their digital experiences was neglected and missed a lot of the modern functionalities a younger readership expects. We worked on a total redesign of the user experience of their main news outlets, their native app, their onboarding and payment flows. We also worked closely with the internal team to concept and launch 5+ niche microsites to test new businessmodels and reach new readership."
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
        tags={["UX","UI"]}
        keyTakeAway="My experience working with LoveFuel encouraged me to ask a lot of seemingly 'stupid' questions and 
        why’s. This approach accelerated the process and really underscored the importance of not being afraid to look stupid and ask the obvious questions. Often, significant value can come from these seemingly mundane questions, especially as complexity and features become more prominent."
        fontColor="dark"
        label="#case"
        caseImage={lovefuelLogo}
        coverImage={loveCover}
        title="LoveFuel"
        description="Helping an AI startup simplify their digital experience"
        tag="#designsystem"
        row="three"
        brief="LoveFuel approached us with an AI assistant designed to enhance romantic relationships, but they were facing usability issues. User testing revealed a steep learning curve to unlock the product's full potential. Our task was to simplify the user experience and make the app more intuitive for a non-technical user base. What initially appeared as a straightforward assignment ultimately led us to redesign the app's core user flows while preserving the depth of its features."
        process={"To gain a comprehensive understanding of LoveFuel's product and its competitive landscape, we installed the app on our phones alongside several of its major competitors. This allowed us to analyze how other companies approached common UX patterns in the relationship market. We meticulously mapped out the functions and flows of various apps, deconstructing LoveFuel's features to assess their complexity. Subsequently, we created different wireframes and collaborated with the LoveFuel team to develop and test our new designs with their users, even while they were still a work in progress. This iterative approach enabled us to make informed decisions rapidly. As a result, we successfully redesigned the entire app, a move that secured them additional funding just a month later."}
        role="I served as the lead designer and project manager for this initiative. In my role, I led the design efforts, established priorities, maintained communication with the LoveFuel team, and ensured that we adhered to our budget and timelines."
        team={["Sofie Grønberg - UX/UI design"]}>
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
        keyTakeAway="Eliminating meetings and adopting asynchronous work strategies can significantly enhance productivity in the right contexts. It allowed us to accelerate our progress and dedicate more time to design rather than being tied up in meetings. Additionally, it empowered the Co-Coders team to provide clearer, more detailed, and well-thought-out feedback. They no longer needed to generate feedback on the spot during video calls or meetings; instead, they could thoroughly review the delivered material before offering their insights."
        tags={["UX","UI", "Async Work", "Illustrations"]}
        label="#case"
        title="CoCoders"
        description="Helping denmark's only female first coding start-up, make coding less intimidating"
        tag="#designsystem"
        row="two"
        brief="Co-coders initially began as a physical community of women eager to learn coding. When they approached us with the vision of creating Denmark's first female-centric coding platform as a web app, we were enthusiastic to assist. However, with their release date just weeks away, we needed to devise efficient workflows for a rapid development and delivery process. By eliminating meetings and embracing asynchronous communication, we successfully designed their web app in just five days."
        process="Before commencing the project, we, in collaboration with the Co-Coders team, established a list of priorities. Throughout the day, we tackled various tasks and shared video updates with the Co-Coders team by day's end. They, in turn, provided feedback in the evening, ensuring that we could start each morning with momentum. Given our tight deadline of just five days for the web app design, we opted for well-tested standard UX patterns, focusing on creating an approachable and user-friendly UI.

        We developed a flexible color system with gradients for larger surfaces and complemented it with bold buttons and cards to infuse personality into the user experience."
        role="I served as the lead designer and project manager for this initiative. In my role, I led the design efforts, established priorities, maintained communication with the Co-Coders team, and ensured that we could deliver within our five day timeframe."
        team={["Sofie Grønberg - UX/UI"]}>
      </Month>

      <Month
        date="July 14th."
        year="2023"
        label="#case"
        title="RENT by WhiteAway Group"
        backgroundColor="#0D3831"
        fontColor="bright"
        caseImage={rentThumb}
        coverImage={rentCover}
        imageSectionOne={[rentDesktop, rentOverview, rentBoxes, rentMock1, rentCheckout, rentLabel]}
        imageSectionTwo={[rentMock2, rentQuantity, rentButton, rentWireframes]}
        tags={["UX","UI", "eCommerce"]}
        description="Launcing denmark's first washer and dryer subscription service in 4 weeks"
        tag="#designsystem"
        row="three"
        brief="The WhiteAway Group identified an untapped market opportunity and aimed to leverage their existing infrastructure and logistics to introduce a new service product – Denmark's first full-service washer and dryer subscription startup. To validate their business idea, they wanted to expose their new service to a large user base. They had the perfect plan how to do that: Launching on Black Friday. The challenge was that Black Friday was only four weeks away.
               We teamed up with a handful of skilled engineers and managed to create a mini brand, design a eCommerce store complete with custom flows for handling the users’ old machines and launched the product just days before Black Friday. The service gained a lot of traction and continues to operate successfully today."
        keyTakeAway="Alignment of expectations played a pivotal role in this process. Establishing a shared vision of the final product was essential for fostering effective communication and working towards a common goal. Our close collaboration with the internal WhiteAway team, coupled with a high degree of autonomy, allowed us to move fast and make crucial decisions on the go. This exceptional teamwork was the driving force behind bringing the project to life."
        process="Drawing upon the WhiteAway group's market expertise, we, along with the internal team, easily sketched a rough wireframe for the entire site. Leveraging user behavior insights from their other sites, we could efficiently incorporate proven patterns with a high likelihood of success. With this foundational knowledge, we crafted a mini brand identity aimed at conveying a fresh and trustworthy image.

        In partnership with their internal content team, we focused on creating a straightforward and intuitive understanding of their product. Development had to start early to ensure enough time for testing and bug fixing, which meant we had to be very structured to determining which components were ready for development, while remaining open to rapid decision-making when dealing with edge cases."
        role="I led the project, overseeing communication and scoping with both the internal WhiteAway team and the external development team, while also being a part of the design execution."
        team={["Rene Sørensen - Branding", "Sofie Grønberg - UX/UI"]}>
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
        brief="yoyo"
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

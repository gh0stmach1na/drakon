import { useRef } from 'react'
import {
  HomepageNav,
  HomepageServices,
  HomepageAbout,
  HomepageFAQ,
  HomepageContact,
} from '.'
import { SideNavigation } from '../Buttons'
import { intro } from '../../copies/drakon-home';
import { Image } from '../Assorted';

import headerLogo from '../../img/logo/dcg_toplogo_v2.png'
import mainLogo from '../../img/logo/drakon-logo-full-color-rgb-300px72ppi.png'

export const Homepage = () => {
  
  const homeRef = useRef()
  const aboutRef = useRef()
  const servicesRef = useRef()
  const faqRef = useRef()
  const contactRef = useRef()

  const refs = {
    homeRef,
    aboutRef,
    servicesRef,
    faqRef,
    contactRef
  }

  return (
    <section 
      className={`Homepage container background`} 
      ref={homeRef}>

      <header className="sticky flex row justify-between align-center">
        <div className="left-column">
          <Image imgSrc={headerLogo} position="left" width="300px" />
        </div>
        <div className="right-column">
          <HomepageNav ref={refs} />
        </div>
      </header>

      <div className="section-container flex column justify-center align-center">
        <p className="-blurb">{intro}</p>
        <Image size="l" imgSrc={mainLogo} />
      </div>
      
      <SideNavigation ref={homeRef} />
      <div className="content-container">
        <HomepageAbout ref={aboutRef} />
        <HomepageServices ref={servicesRef} />
        <HomepageFAQ ref={faqRef} />
        <HomepageContact ref={contactRef} />
      </div>
    </section>
  )
}
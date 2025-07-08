import React, { forwardRef } from 'react'
import { Image } from '../Assorted'
import { about, RAASstats } from '../../copies/drakon-home'
import { Stats } from '../Stats'
import keyLogo from '../../img/logo/keystodrakon.png'

export const HomepageAbout = forwardRef((_, ref) => {
  return (
    <section className="HomepageAbout flex column align-center" ref={ref}>
      
      <div className="about section-container flex column align-center">
        <h1>{about.title}</h1>
        <div className="flex row justify-center flex-column-mobile">
          <Image imgSrc={keyLogo} width="120px" />
          <p>{about.content}</p>
        </div>
        <span>-{about.footer}</span>
      </div>

      <Stats stats={RAASstats} />
    </section>
  )
})
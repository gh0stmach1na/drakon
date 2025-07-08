import { forwardRef } from "react"
import { services } from "../../copies/drakon-home"

export const HomepageFAQ = forwardRef((_, ref) => {
  const renderServicesList = () => {
    return services.list.map(item => {
      return <div className="ListItem flex row justify-start">
        <p>
          <i className="fa-solid fa-caret-right" />
          {item}
        </p>
      </div>
    })
  }

  const renderServicesContent = () => {
    return services.content.map(item => {
      return <p>{item}</p>
    })
  }

  return (
    <section className="HomepageFAQ section-container flex row justify-center faq-responsive" ref={ref}>
      <div className="left-column">
        <h1 className="mobile-header">{services.contentHeader}</h1>
        {renderServicesList()}
      </div>
      <div className="right-column">
        <h1 className="desktop-header">{services.contentHeader}</h1>
        <p>{services.contentSubHeader}</p>
        {renderServicesContent()}
      </div>
    </section>
  )
})
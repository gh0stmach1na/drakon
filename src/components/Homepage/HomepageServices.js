import { forwardRef } from "react"
import { SlideModule } from "../Assorted"
import { topics } from "../../copies/drakon-home"

export const HomepageServices = forwardRef((_, ref) => {
  return (
    <section className="HomepageServices section-container" ref={ref}>
      <SlideModule topics={topics} />
    </section>
  )
})
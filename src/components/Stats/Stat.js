import { Image } from '../Assorted'

export const Stat = ({ stat }) => {
  return <section className="Stat flex row align-center">
    <Image imgSrc={stat.imgSrc} width="100px" />
    <div className="stat-content flex column align-start">
      <h1>{stat.counter}</h1>
      <span>{stat.label}</span>
    </div>
  </section>
}
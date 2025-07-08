import { Stat } from './Stat'

export const Stats = (props) => {
  const renderStats = () => { 
    return props.stats.stats.map(stat => {
      return <Stat stat={stat} />
    })
  }

  return (
    <section className="Stats RAASstats-container">
        <h2>{props.stats.title}</h2>
        <div className="stats-grid flex row justify-center wrap">
          {renderStats()}
        </div>
      </section>
   )
}
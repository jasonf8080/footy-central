import TeamResults from "./TeamResults"
import TeamFixtures from "./TeamFixtures"

const TeamSchedule = () => {
  return (
    <section>
      <div className="container">
        <TeamResults />
        <TeamFixtures />
      </div>
    </section>
  )
}

export default TeamSchedule

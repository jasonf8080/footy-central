import PlayerClubs from "./PlayerClubs"
import PlayerHonours from "./PlayerHonours"

const PlayerCareer = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4 md:gap-8 container">
      <PlayerClubs />
      <PlayerHonours />
    </section>
  )
}

export default PlayerCareer

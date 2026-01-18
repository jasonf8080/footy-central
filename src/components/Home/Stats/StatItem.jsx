import { setRounded, styleElementByIndex } from "../../../utils/helpers"

const StatItem = ({ player, rank, team, stat, index, length }) => {
  
  return (
    <article
      className={`${styleElementByIndex(
        "even",
        index
      )} ${setRounded(index, length, "lg")} standing-row text-md stat-row`}
    >
      <p>{index + 1}</p>
      <p>{player}</p>

      <div className="flex items-center md:items-start">
        <img
          className="w-[25px] max-h-[25px] md:mr-2"
          src={team.logo}
          alt={team.name}
        />
        <p className="hidden md:block">{team.name}</p>
      </div>

      <p className="centered">{stat.total}</p>
    </article>
  )
}

export default StatItem

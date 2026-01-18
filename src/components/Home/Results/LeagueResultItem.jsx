import { Link } from "react-router-dom"

const LeagueResultItem = ({
  idEvent,
  homeBadge,
  homeScore,
  awayBadge,
  awayScore,
}) => {
  return (
    <Link
      to={`/game/${idEvent}/stats`}
      className="min-w-[140px] md:min-w-[160px] h-[65px] md:h-[70px] card-style mr-4 p-5 flex-center"
    >
      <img
        className="w-[25px] md:w-[30px] h-auto mr-2"
        src={homeBadge}
        alt="Home team"
      />

      <span className="-bg--dark-3 font-bold text-lg md:text-xl text-center max-w-6 min-w-6 md:max-w-7 md:min-w-7">
        <p>{homeScore}</p>
      </span>

      <span className="-bg--dark-3 font-bold text-lg md:text-xl text-center max-w-6 min-w-6 md:max-w-7 md:min-w-7">
        <p>{awayScore}</p>
      </span>

      <img
        className="w-[25px] md:w-[30px] h-auto ml-2"
        src={awayBadge}
        alt="Away team"
      />
    </Link>
  )
}

export default LeagueResultItem

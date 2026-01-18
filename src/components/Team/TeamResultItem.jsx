import { styleElementByIndex, formatDate } from "../../utils/helpers"
import { Link } from "react-router-dom"
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io"

const TeamResultItem = ({
  id,
  league,
  date,
  homeTeam,
  awayTeam,
  winner,
  index,
}) => {
  return (
    <Link
      to={`/game/${id}/stats`}
      className={`${styleElementByIndex("even", index)}
        ${index === 0 && "rounded-t-lg md:rounded-t-none"}
        text-sm md:text-md team-results-row p-4 hover:scale-[1.07] duration-300`}
    >
      {/* Date */}
      <p className="hidden centered md:flex justify-center items-center">
        {formatDate(date)}
      </p>

      {/* Match */}
      <div className="min-w-full max-w-full team-scores-row">
        {/* Home */}
        <div className="justify-end">
          <img
            className="mr-3 w-[25px] md:w-[30px]"
            src={homeTeam.logo}
            alt={homeTeam.name}
          />
          <p className="hidden md:block">{homeTeam.name}</p>
          <p className="block uppercase md:hidden">
            {homeTeam.name.slice(0, 3)}
          </p>
        </div>

        {/* Score */}
        <div className="justify-center relative">
          {winner === "home" && (
            <span className="absolute top-[50%] translate-y-[-50%] left-1 md:left-5 text-green-500 text-2xl md:text-4xl">
              <IoMdArrowDropright />
            </span>
          )}

          {winner === "away" && (
            <span className="absolute top-[50%] translate-y-[-50%] right-1 md:right-5 text-red-500 text-2xl md:text-4xl">
              <IoMdArrowDropleft />
            </span>
          )}

          <span
            className={`${
              homeTeam.score >= awayTeam.score
                ? "text-opacity-100"
                : "text-opacity-70"
            } font-bold text-white`}
          >
            {homeTeam.score}
          </span>

          <span className="mx-1">-</span>

          <span
            className={`${
              awayTeam.score >= homeTeam.score
                ? "text-opacity-100"
                : "text-opacity-70"
            } font-bold text-white`}
          >
            {awayTeam.score}
          </span>
        </div>

        {/* Away */}
        <div className="justify-start">
          <p className="hidden md:block">{awayTeam.name}</p>
          <p className="block uppercase md:hidden">
            {awayTeam.name.slice(0, 3)}
          </p>
          <img
            className="ml-3 w-[25px] md:w-[30px]"
            src={awayTeam.logo}
            alt={awayTeam.name}
          />
        </div>
      </div>

      {/* Competition */}
      <p className="hidden md:block centered mr-4">{league}</p>
    </Link>
  )
}

export default TeamResultItem

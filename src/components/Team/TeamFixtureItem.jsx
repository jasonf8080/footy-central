import {
  styleElementByIndex,
  formatDate,
  setRounded,
} from "../../utils/helpers"

const TeamFixtureItem = ({
  league,
  date,
  homeTeam,
  awayTeam,
  index,
  length,
}) => {
  return (
    <article
      className={`${styleElementByIndex("odd", index)} ${setRounded(
        index,
        length,
        "lg"
      )} text-sm md:text-md team-results-row team-fixture-row p-4 duration-300`}
    >
      <p className="centered hidden md:flex justify-center items-center">
        {formatDate(date)}
      </p>

      <div className="min-w-full max-w-full team-scores-row">
        {/* Home */}
        <div className="justify-end">
          <img
            className="mr-3 w-[25px] md:w-[30px]"
            src={homeTeam.logo}
            alt={homeTeam.name}
          />
          <p className="hidden md:block">{homeTeam.name}</p>
          <p className="block md:hidden uppercase">
            {homeTeam.name.slice(0, 3)}
          </p>
        </div>

        {/* VS */}
        <div className="justify-center relative">
          <p>vs</p>
        </div>

        {/* Away */}
        <div className="justify-start">
          <p className="hidden md:block">{awayTeam.name}</p>
          <p className="block md:hidden uppercase">
            {awayTeam.name.slice(0, 3)}
          </p>
          <img
            className="ml-3 w-[25px] md:w-[30px]"
            src={awayTeam.logo}
            alt={awayTeam.name}
          />
        </div>
      </div>

      <p className="hidden md:block centered mr-4">{league}</p>
    </article>
  )
}

export default TeamFixtureItem

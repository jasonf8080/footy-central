import { Link } from "react-router-dom"
import { setRounded, styleElementByIndex } from "../../../utils/helpers"

const StandingItem = ({
  id,
  place,
  team,
  logo,
  form,
  gamesPlayed,
  won,
  lost,
  tie,
  scored,
  conceded,
  goalDifference,
  points,
  index,
  length,
}) => {
  // Convert string "WWLDW" -> ["W", "W", "L", "D", "W"]
  const newForm = form.split("")

  return (
    <Link
      to={`/team/${id}/schedule`}
      className={`${styleElementByIndex(
        "even",
        index
      )} ${setRounded(index, length, "lg")} text-md standing-row`}
    >
      {/* Team */}
      <div className="flex">
        <p>{place}</p>

        <img
          className="w-[22px] md:w-[25px] h-auto ml-3 mr-2"
          src={logo}
          alt={team}
        />

        <p className="hidden md:block">{team}</p>
        <p className="block md:hidden uppercase">
          {team.slice(0, 3)}
        </p>
      </div>

      <p className="centered">{gamesPlayed}</p>
      <p className="centered">{won}</p>
      <p className="centered">{tie}</p>
      <p className="centered">{lost}</p>

      <p className="centered hidden md:block">{scored}</p>
      <p className="centered hidden md:block">{conceded}</p>
      <p className="centered hidden md:block">{goalDifference}</p>

      <p className="centered">{points}</p>

      {/* Form */}
      <div className="centered justify-center items-center hidden lg:flex">
        {newForm.map((item, idx) => (
          <span
            key={idx}
            className={`
              ${
                item === "W"
                  ? "bg-success-color"
                  : item === "D"
                  ? "bg-neutral-color"
                  : "bg-error-color"
              }
              text-white w-6 h-6 flex-center rounded-full text-xs mr-1
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default StandingItem

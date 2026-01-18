import { Link } from "react-router-dom"
import { styleElementByIndex, setRounded } from "../../utils/helpers"

const LineupItem = ({ id, name, number, index, length }) => {
  return (
    <Link
      to={`/player/${id}/about`}
      className={`${styleElementByIndex("odd", index)} 
        ${setRounded(index, length, "lg")} 
        lineup-item flex justify-between items-center py-3 md:py-4 px-6 md:px-8 text-sm md:text-lg`}
    >
      <div className="flex items-center">
        <h3 className="ml-4">{name}</h3>
      </div>

      <p>{number}</p>
    </Link>
  )
}

export default LineupItem

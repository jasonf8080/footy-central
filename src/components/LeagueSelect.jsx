import { useDispatch } from "react-redux"
import { changeActiveLeague } from "../features/clubs"

const LeagueSelect = ({ name, id, image, activeLeague }) => {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(changeActiveLeague(id))}
      className="rounded-md cursor-pointer flex justify-between items-start mb-10"
    >
      <div className="flex">
        <img
          className="w-[50px] h-[60px]"
          src={image}
          alt={name}
        />
        <p className="text-2xl font-bold mt-2 ml-4">
          {name}
        </p>
      </div>

      <span
        className={`${
          activeLeague === id ? "border-black" : ""
        } h-[30px] w-[30px] border-2 shadow-md rounded-full mt-2 relative`}
      >
        {activeLeague === id && (
          <span className="rounded-full bg-black h-[75%] w-[75%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        )}
      </span>
    </div>
  )
}

export default LeagueSelect

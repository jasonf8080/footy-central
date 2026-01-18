import { styleElementByIndex, setRounded } from "../../utils/helpers"
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io"

const GameStatItem = ({ statType, homeStat, awayStat, index, length }) => {
  const total = homeStat + awayStat
  const homePct = total ? (homeStat / total) * 100 : 0
  const awayPct = total ? (awayStat / total) * 100 : 0
  const isPossession = statType === "Ball Possession"

  return (
    <article
      className={`${styleElementByIndex("even", index)} 
      ${setRounded(index, length, "lg")} 
      grid grid-cols-[0.4fr,2.5fr,0.4fr] md:grid-cols-[1fr,2.5fr,1fr] py-3 text-sm md:text-lg md:py-6`}
    >
      <div />

      <div className="centered relative">
        <span
          className={`${
            homeStat > awayStat
              ? "left-[-20px] md:left-[-30px] text-green-400"
              : awayStat > homeStat
              ? "right-[-20px] md:right-[-30px] text-blue-400"
              : "hidden"
          } text-xl md:text-3xl absolute top-[50%] translate-y-[-50%] md:top-0 md:translate-y-0`}
        >
          {homeStat > awayStat ? <IoMdArrowDropright /> : <IoMdArrowDropleft />}
        </span>

        <div className="grid grid-cols-[0.25fr,1fr,0.25fr] py-2 md:py-0 md:mb-4 font-bold text-sm md:text-lg">
          <p className="text-green-400">
            {homeStat}
            {isPossession ? "%" : ""}
          </p>

          <p className="centered">{statType}</p>

          <p className="text-blue-400">
            {awayStat}
            {isPossession ? "%" : ""}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-3 md:gap-4 max-w-full">
          <div className="relative max-w-[100%] h-2 -bg--dark-5">
            <div
              style={{ width: `${homePct}%` }}
              className="right-0 absolute bg-green-400 h-2"
            />
          </div>

          <div className="relative max-w-[100%] h-2 -bg--dark-5">
            <div
              style={{ width: `${awayPct}%` }}
              className="left-0 absolute bg-blue-400 h-2"
            />
          </div>
        </div>
      </div>

      <div />
    </article>
  )
}

export default GameStatItem

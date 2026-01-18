import { useSelector } from "react-redux"
import { IoStatsChartOutline } from "react-icons/io5"

const GameStatsHeader = () => {
  const {
    gameInfo: { data },
  } = useSelector((state) => state.game)

  if (!data?.homeTeam || !data?.awayTeam) return null

  return (
    <header className="grid grid-cols-[1fr,0.5fr,1fr] items-center py-4 text-md md:text-xl rounded-t-lg font-bold">
      {/* Home Team */}
      <div className="flex w-full flex-center">
        <img
          className="w-[30px] md:w-[50px] h-auto mr-3 md:mr-5"
          src={data.homeTeam.logo}
          alt={data.homeTeam.name}
        />
        <h1 className="hidden md:block">{data.homeTeam.name}</h1>
        <h1 className="block md:hidden uppercase">
          {data.homeTeam.name.slice(0, 3)}
        </h1>
      </div>

      {/* Center */}
      <h1 className="hidden md:block w-full centered">Summary</h1>
      <span className="block md:hidden w-full flex-center text-2xl">
        <IoStatsChartOutline />
      </span>

      {/* Away Team */}
      <div className="flex w-full flex-center">
        <h1 className="hidden md:block">{data.awayTeam.name}</h1>
        <h1 className="block md:hidden uppercase">
          {data.awayTeam.name.slice(0, 3)}
        </h1>
        <img
          className="w-[30px] md:w-[50px] h-auto ml-3 md:ml-5"
          src={data.awayTeam.logo}
          alt={data.awayTeam.name}
        />
      </div>
    </header>
  )
}

export default GameStatsHeader

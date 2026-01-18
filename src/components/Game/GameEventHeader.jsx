import { useSelector } from 'react-redux'
import { MdOutlineTimer } from 'react-icons/md'

const GameEventHeader = () => {
  const {
    gameInfo: { data },
  } = useSelector((state) => state.game)

  return (
    <header className="shadow-xl flex justify-between items-center py-4 text-md md:text-xl font-bold">
      {/* Home team */}
      <div className="flex items-center basis-1/2 justify-center">
        <img
          src={data.homeTeam.logo}
          className="w-[30px] md:w-[50px] h-auto mr-3 md:mr-5"
          alt=""
        />
        <h2 className="hidden md:block">{data.homeTeam.name}</h2>
        <h2 className="block md:hidden uppercase">
          {data.homeTeam.name.slice(0, 3)}
        </h2>
      </div>

      {/* Timer icon */}
      <span className="font-bold text-2xl md:text-3xl">
        <MdOutlineTimer />
      </span>

      {/* Away team */}
      <div className="flex items-center basis-1/2 justify-center">
        <img
          src={data.awayTeam.logo}
          className="w-[30px] md:w-[50px] h-auto ml-3 md:ml-5"
          alt=""
        />
        <h2 className="order-[-1] hidden md:block">{data.awayTeam.name}</h2>
        <h2 className="order-[-1] block md:hidden uppercase">
          {data.awayTeam.name.slice(0, 3)}
        </h2>
      </div>
    </header>
  )
}

export default GameEventHeader

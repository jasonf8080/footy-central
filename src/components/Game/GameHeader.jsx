import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { formatDate } from "../../utils/helpers"
import { GameHeaderLoader } from "../loaders"
import { fetchGameInfo } from "../../features/game"

const GameHeader = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    gameInfo: { loading, data },
  } = useSelector((state) => state.game)

  // Fetch Game Info - Date, League, Teams, Score
  useEffect(() => {
    if (id) {
      dispatch(fetchGameInfo({ gameID: id }))
    }
  }, [id, dispatch])

  if (loading) return <GameHeaderLoader />

  return (
    <div className="container rounded-lg">
      <section
        id="game-header"
        className="relative p-10 pb-16 bg-[#1a1a1a] rounded-lg"
      >
        <div className="text-center mb-6">
          <p className="font-bold text-md md:text-xl mb-2">{data.league}</p>
          <p className="text-sm md:text-lg">{formatDate(data.date)}</p>
        </div>

        <div className="grid grid-cols-[2fr,1fr,2fr] mx-auto font-bold">
          {/* Home */}
          <div className="flex justify-end items-center">
            <Link
              to={`/team/${data.homeTeam.id}/schedule`}
              className="mr-5 text-3xl hidden md:block"
            >
              {data?.homeTeam?.name}
            </Link>

            <Link
              to={`/team/${data.homeTeam.id}/schedule`}
              className="mr-3 md:mr-5 text-xl md:text-3xl block md:hidden uppercase"
            >
              {data?.homeTeam?.name?.slice(0, 3)}
            </Link>

            <img
              src={data?.homeTeam?.logo}
              className="w-[40px] md:w-[60px] h-auto"
              alt=""
            />
          </div>

          {/* Score */}
          <div className="flex justify-center items-center font-bold mx-3 md:mx-6 text-2xl md:text-4xl">
            <h1>{data?.homeTeam?.score}</h1>
            <span className="mx-2 md:mx-4">-</span>
            <h1>{data?.awayTeam?.score}</h1>
          </div>

          {/* Away */}
          <div className="flex justify-start items-center">
            <Link
              to={`/team/${data.awayTeam.id}/schedule`}
              className="ml-5 text-3xl md:block hidden"
            >
              {data?.awayTeam?.name}
            </Link>

            <Link
              to={`/team/${data.awayTeam.id}/schedule`}
              className="ml-3 md:mr-5 text-xl md:text-3xl block md:hidden uppercase"
            >
              {data?.awayTeam?.name?.slice(0, 3)}
            </Link>

            <img
              src={data?.awayTeam?.logo}
              className="w-[40px] md:w-[60px] h-auto order-[-1]"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default GameHeader

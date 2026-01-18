import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import LineupList from "./LineupList"
import { LineupLoader } from "../loaders"
import { fetchGameLineups } from "../../features/game"

const GameLineups = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    gameLineups: { loading, data },
    gameInfo: { data: gameInfo },
  } = useSelector((state) => state.game)

  // Fetch Game Lineups
  useEffect(() => {
    if (id) {
      dispatch(fetchGameLineups({ gameID: id }))
    }
  }, [id, dispatch])

  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {loading ? (
          <>
            <LineupLoader />
            <LineupLoader />
          </>
        ) : (
          <>
            <LineupList
              lineups={data.filter((item) => item.isHome === true)}
              team={gameInfo.homeTeam}
            />
            <LineupList
              lineups={data.filter((item) => item.isHome === false)}
              team={gameInfo.awayTeam}
            />
          </>
        )}
      </div>
    </section>
  )
}

export default GameLineups

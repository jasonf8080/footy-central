import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { GameStatsLoader } from "../loaders"
import GameStatItem from "./GameStatItem"
import GameStatsHeader from "./GameStatsHeader"
import { fetchGameStats } from "../../features/game"

const GameStats = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    gameStats: { loading, data },
  } = useSelector((state) => state.game)

  // Fetch Game Stats
  useEffect(() => {
    if (id) {
      dispatch(fetchGameStats({ gameID: id }))
    }
  }, [id, dispatch])

  return (
    <section id="game-stats" className="container -bg--dark-1 rounded-lg">
      {loading ? (
        <GameStatsLoader />
      ) : (
        <>
          <GameStatsHeader />
          {data.map((gameStat, index) => (
            <GameStatItem
              key={`${gameStat.statType}-${index}`}
              {...gameStat}
              index={index}
              length={data.length}
            />
          ))}
        </>
      )}
    </section>
  )
}

export default GameStats

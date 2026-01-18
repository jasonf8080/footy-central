import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { EventsLoader } from "../loaders"
import { fetchGameEvents } from "../../features/game"
import GameEventItem from "./GameEventItem"
import GameEventHeader from "./GameEventHeader"

const GameEvents = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    gameEvents: { loading, data },
  } = useSelector((state) => state.game)

  // Fetch Game Events
  useEffect(() => {
    if (id) {
      dispatch(fetchGameEvents({ gameID: id }))
    }
  }, [id, dispatch])

  return (
    <section
      id="game-events"
      className="-bg--dark-1 container rounded-lg"
    >
      {loading ? (
        <EventsLoader />
      ) : (
        <>
          <GameEventHeader />
          {data.map((gameEvent, index) => (
            <GameEventItem
              key={gameEvent.id}
              {...gameEvent}
              index={index}
              gameEvents={data.length}
            />
          ))}
        </>
      )}
    </section>
  )
}

export default GameEvents

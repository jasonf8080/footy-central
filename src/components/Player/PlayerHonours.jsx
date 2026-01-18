import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import PlayerHonourItem from "./PlayerHonourItem"
import { PlayerClubsLoader } from "../loaders"
import { fetchPlayerHonours } from "../../features/player"
import Message from "../main/Message"

const PlayerHonours = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    playerHonours: { loading, data },
  } = useSelector((state) => state.player)

  // Fetch Player Honours
  useEffect(() => {
    if (id) {
      dispatch(fetchPlayerHonours({ playerID: id }))
    }
  }, [id, dispatch])

  return (
    <div className="rounded-lg basis-1/2 p-6 md:p-10 bg-[#1a1a1a] text-sm md:text-lg">
      <h1 className="mb-8 text-xl md:text-3xl font-bold">
        Player Honours
      </h1>

      {loading ? (
        <PlayerClubsLoader />
      ) : data.length < 1 ? (
        <Message message="No trophies to display" />
      ) : (
        data.map((playerHonour) => (
          <PlayerHonourItem
            key={playerHonour.id}
            {...playerHonour}
          />
        ))
      )}
    </div>
  )
}

export default PlayerHonours

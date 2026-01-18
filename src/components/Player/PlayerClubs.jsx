import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import PlayerClubItem from "./PlayerClubItem"
import { PlayerClubsLoader } from "../loaders"
import { fetchPlayerCareer } from "../../features/player"

const PlayerClubs = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    playerCareer: { loading, data },
  } = useSelector((state) => state.player)

  // Fetch Player Clubs
  useEffect(() => {
    if (id) {
      dispatch(fetchPlayerCareer({ playerID: id }))
    }
  }, [id, dispatch])

  return (
    <div className="rounded-lg basis-1/2 p-6 md:p-10 pb-4 text-sm md:text-lg bg-[#1a1a1a] shadow-xl">
      <h1 className="mb-8 text-xl md:text-3xl font-bold">
        Previous Clubs
      </h1>

      {loading ? (
        <PlayerClubsLoader />
      ) : (
        <div className="former-teams-section">
          {data.map((playerClub) => (
            <PlayerClubItem
              key={`${playerClub.idTeam}${playerClub.joined}${playerClub.departed}`}
              {...playerClub}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PlayerClubs

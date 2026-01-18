import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import StandingsHead from "./StandingsHead"
import StandingItem from "./StandingItem"
import { StandingLoader } from "../../loaders"
import { fetchStandings } from "../../../features/clubs"

const Standings = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    standings: { loading, data },
  } = useSelector((state) => state.clubs)

  // Fetch Standings
  useEffect(() => {
    if (id) {
      dispatch(fetchStandings({ activeLeague: id }))
    }
  }, [id, dispatch])

  return (
    <section id="standings-section" className="container">
      {loading ? (
        <StandingLoader />
      ) : (
        <div className="standings-container">
          <StandingsHead />
          {data.map((standing, index) => (
            <StandingItem
              key={standing.id}
              {...standing}
              index={index}
              length={data.length}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Standings

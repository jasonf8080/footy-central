import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import LeagueResultItem from "./LeagueResultItem"
import { ScheduleLoader } from "../../loaders"
import { fetchResults } from "../../../features/clubs"

const LeagueResults = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    results: { loading, data },
  } = useSelector((state) => state.clubs)

  // Fetch Results
  useEffect(() => {
    if (id) {
      dispatch(fetchResults({ activeLeague: id }))
    }
  }, [id, dispatch])

  return (
    <section className="container">
      <h1 className="section-heading">Results</h1>

      {loading ? (
        <ScheduleLoader />
      ) : (
        <div className="flex max-w-full overflow-scroll pb-4 hide-scroll">
          {data.map((leagueResult) => (
            <LeagueResultItem
              key={leagueResult.idEvent}
              {...leagueResult}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default LeagueResults

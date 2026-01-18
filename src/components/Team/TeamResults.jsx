import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { TeamScheduleLoader } from "../loaders"
import TeamResultHead from "./TeamResultHeader"
import TeamResultItem from "./TeamResultItem"
import { fetchTeamResults } from "../../features/team"

const TeamResults = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const {
    teamResults: { loading, data },
  } = useSelector((state) => state.team)

  // Fetch Team Results
  useEffect(() => {
    if (id) {
      dispatch(fetchTeamResults({ teamID: id }))
    }
  }, [id, dispatch])

  return (
    <>
      <TeamResultHead />

      {loading ? (
        <TeamScheduleLoader />
      ) : (
        data.map((teamResult, index) => (
          <TeamResultItem
            key={teamResult.id}
            {...teamResult}
            index={index}
            length={data.length}
          />
        ))
      )}
    </>
  )
}

export default TeamResults

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import RosterPositionGroup from "./RosterPositionGroup"
import { RosterCardLoader } from "./loaders"
import { fetchTeamRoster } from "../features/team"

const TeamRoster = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    teamRoster: { loading, data },
  } = useSelector((state) => state.team)

  // Fetch Team Roster
  useEffect(() => {
    if (id) {
      dispatch(fetchTeamRoster({ teamID: id }))
    }
  }, [id, dispatch])

  if (loading) {
    return (
      <>
        <RosterCardLoader />
        <RosterCardLoader />
      </>
    )
  }

  return (
    <section>
      <div className="container">
        <RosterPositionGroup
          group="goalkeepers"
          data={data.filter((player) => player.position === "goalkeeper")}
        />
        <RosterPositionGroup
          group="defenders"
          data={data.filter((player) => player.position === "defender")}
        />
        <RosterPositionGroup
          group="midfielders"
          data={data.filter((player) => player.position === "midfielder")}
        />
        <RosterPositionGroup
          group="forwards"
          data={data.filter((player) => player.position === "forward")}
        />
        <RosterPositionGroup
          group="manager"
          data={data.filter((player) => player.position === "manager")}
        />
      </div>
    </section>
  )
}

export default TeamRoster

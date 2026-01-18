import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { TeamScheduleLoader } from "../loaders"
import TeamFixtureItem from "./TeamFixtureItem"
import { fetchTeamFixtures } from "../../features/team"

const TeamFixtures = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    teamFixtures: { loading, data },
  } = useSelector((state) => state.team)

  useEffect(() => {
    if (id) {
      dispatch(fetchTeamFixtures({ teamID: id }))
    }
  }, [id, dispatch])

  if (loading) return <TeamScheduleLoader />

  return (
    <>
      {data.map((teamFixture, index) => (
        <TeamFixtureItem
          key={teamFixture.id}
          {...teamFixture}
          index={index}
          length={data.length}
        />
      ))}
    </>
  )
}

export default TeamFixtures

import { Outlet } from "react-router-dom"

import TeamHeader from "../components/Team/TeamHeader"
import { Tabs } from "../components"

const Team = () => {
  const teamTabs = [
    { name: "schedule", link: "schedule" },
    { name: "roster", link: "roster" },
  ]

  return (
    <>
      <TeamHeader />
      <Tabs tabData={teamTabs} />
      <Outlet />
    </>
  )
}

export default Team

import { Outlet } from "react-router-dom"

import { Tabs } from "../components"
import { LeagueHeader } from "../components/Home"
import { LeagueResults } from "../components/Home/Results"

const Home = () => {
  // Home Tabs - Clubs, Standings, Stats
  const homeTabs = [
    { name: "clubs", link: "." },
    { name: "standings", link: "standings" },
    { name: "stats", link: "stats" },
  ]

  return (
    <div>
      <LeagueHeader />
      <LeagueResults />
      <Tabs tabData={homeTabs} />
      <Outlet />
    </div>
  )
}

export default Home

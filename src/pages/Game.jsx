import { Outlet } from "react-router-dom"

import { Tabs } from "../components"
import GameHeader from "../components/Game/GameHeader"

const Game = () => {
  const gameTabs = [
    { name: "stats", link: "stats" },
    { name: "lineups", link: "lineups" },
    { name: "events", link: "events" },
  ]

  return (
    <>
      <GameHeader />
      <Tabs tabData={gameTabs} />
      <Outlet />
    </>
  )
}

export default Game

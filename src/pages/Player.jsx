import { Outlet } from "react-router-dom"

import { Tabs } from "../components"
import PlayerHeader from "../components/Player/PlayerHeader"

const Player = () => {
  const playerTabs = [
    { name: "about", link: "about" },
    { name: "career", link: "career" },
  ]

  return (
    <>
      <PlayerHeader />
      <Tabs tabData={playerTabs} />
      <Outlet />
    </>
  )
}

export default Player

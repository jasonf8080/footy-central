import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"

import { Navbar } from "./components"

// Pages
import { Home, Team, Player, Game, PlayerSearch, Error } from "./pages"

// Home outlets
import Clubs from "./components/Home/Clubs/Clubs"
import Standings from "./components/Home/Standings/Standings"
import Stats from "./components/Home/Stats/Stats"

// Team outlets
import TeamSchedule from "./components/Team/TeamSchedule"
import TeamRoster from "./components/TeamRoster"

// Player outlets
import PlayerBio from "./components/Player/PlayerBio"
import PlayerCareer from "./components/Player/PlayerCareer"

// Game outlets
import GameLineups from "./components/Game/GameLineups"
import GameStats from "./components/Game/GameStats"
import GameEvents from "./components/Game/GameEvents"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/league/4328" replace />,
  },

  {
    path: "/league/:id",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <Clubs /> },
      { path: "standings", element: <Standings /> },
      { path: "stats", element: <Stats /> },
    ],
  },

  // Team Page
  {
    path: "/team/:id",
    element: (
      <>
        <Navbar />
        <Team />
      </>
    ),
    errorElement: <Error />,
    children: [
      { path: "schedule", element: <TeamSchedule /> },
      { path: "roster", element: <TeamRoster /> },
    ],
  },

  // Player Page
  {
    path: "/player/:id",
    element: (
      <>
        <Navbar />
        <Player />
      </>
    ),
    errorElement: <Error />,
    children: [
      { path: "about", element: <PlayerBio /> },
      { path: "career", element: <PlayerCareer /> },
    ],
  },

  // Game Page
  {
    path: "/game/:id",
    element: (
      <>
        <Navbar />
        <Game />
      </>
    ),
    errorElement: <Error />,
    children: [
      { path: "stats", element: <GameStats /> },
      { path: "lineups", element: <GameLineups /> },
      { path: "events", element: <GameEvents /> },
    ],
  },

  {
    path: "/matchup/:id",
    element: (
      <>
        <Navbar />
        <h1>Matchup</h1>
      </>
    ),
    errorElement: <Error />,
  },

  // Search Page
  {
    path: "/search",
    element: (
      <>
        <Navbar />
        <PlayerSearch />
      </>
    ),
    errorElement: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App


// function App() {
//   return (
//     <div className="bg-red-500 border-green-400" style={{ padding: 24 }}>
//       <h1>Footy Central is alive ✅</h1>
//     </div>
//   )
// }

// export default App

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { CgMenuRight } from "react-icons/cg"

import { handleOnChangeSearchTerm } from "../features/search"
import { setShowMobileMenu } from "../features/menu"

import { LeagueMenu, MobileMenu, TeamMenu } from "./menus"
import Searchbar from "./Searchbar"

// ✅ Vite-friendly public asset import:
const logo = "/images/logo.svg"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { showMobileMenu } = useSelector((state) => state.menu)
  const { navbarSearchTerm } = useSelector((state) => state.playerSearch)

  // Desktop dropdown menus - leagues or teams
  const [showMenu, setShowMenu] = useState(null)

  const handleSearchNavigate = ({ searchTerm }) => {
    navigate(`/search?name=${searchTerm}`, { replace: true })
  }

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto"
  }, [showMobileMenu])

  return (
    <nav className="w-full h-[80px] bg-[#1a1a1a] flex justify-center items-center relative shadow-2xl border-b-2 border-black">
      <div className="h-full flex items-center justify-between container">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              className="max-w-[120px] h-[35px] scale-150 md:scale-[200%] mr-16 translate-x-5"
              alt="Footy Central"
            />
          </Link>

          <div className="hidden md:flex gap-0 text-white">
            <HoverTab name="leagues" showMenu={showMenu} setShowMenu={setShowMenu} />
            <HoverTab name="teams" showMenu={showMenu} setShowMenu={setShowMenu} />
          </div>
        </div>

        {/* Menus */}
        {showMenu === "leagues" && <LeagueMenu name="leagues" setShowMenu={setShowMenu} />}
        {showMenu === "teams" && <TeamMenu name="teams" setShowMenu={setShowMenu} />}

        <Searchbar
          id="nav-input"
          value={navbarSearchTerm}
          type="navSearch"
          changeFunction={(payload) => dispatch(handleOnChangeSearchTerm(payload))}
          // if your Searchbar expects a submit handler, uncomment this:
          // submitFunction={(payload) => handleSearchNavigate(payload)}
        />

        <button
          className="block md:hidden text-[40px]"
          onClick={() => dispatch(setShowMobileMenu())}
          aria-label="Open menu"
        >
          <CgMenuRight />
        </button>

        {showMobileMenu && <MobileMenu />}
      </div>
    </nav>
  )
}

const HoverTab = ({ name, showMenu, setShowMenu }) => {
  return (
    <button
      onMouseOver={() => setShowMenu(name)}
      onMouseLeave={() => setShowMenu(null)}
      data-type={name}
      className="relative capitalize min-h-[80px] px-4"
      type="button"
    >
      {name}
      {name === showMenu && (
        <span className="absolute bottom-0 translate-y-[-1px] left-0 w-full bg-white h-[3px]" />
      )}
    </button>
  )
}

export default Navbar

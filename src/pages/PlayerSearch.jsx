import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { fetchSearch, handleOnChangeSearchTerm } from "../features/search"
import RosterItem from "../components/RosterItem"
import { SearchPlayerLoader } from "../components/loaders"
import Searchbar from "../components/Searchbar"

const PlayerSearch = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    loading,
    searchPlayers,
    navbarSearchTerm,
    playerSearchTerm,
  } = useSelector((state) => state.playerSearch)

  const [searchParams] = useSearchParams()
  const pathname = searchParams.get("name") || ""

  // Fetch search results when query changes
  useEffect(() => {
    dispatch(
      fetchSearch({
        searchQuery:
          playerSearchTerm || navbarSearchTerm || pathname,
      })
    )
  }, [pathname, playerSearchTerm, navbarSearchTerm, dispatch])

  return (
    <section>
      <div className="w-full md:w-[1000px] mx-auto container">
        <div className="flex justify-center items-center flex-col">
          <Searchbar
            id="player-search-input"
            value={playerSearchTerm}
            type="playerSearch"
            changeFunction={(payload) =>
              dispatch(handleOnChangeSearchTerm(payload))
            }
          />

          <p className="my-8 text-md md:text-xl capitalize">
            {loading ? (
              "Loading..."
            ) : searchPlayers.length > 0 ? (
              <>Showing all results for "{pathname}"</>
            ) : (
              <>No results found for "{pathname}"</>
            )}
          </p>
        </div>

        {loading ? (
          <SearchPlayerLoader />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5 max-w-full">
            {searchPlayers.map((item) => (
              <RosterItem key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PlayerSearch

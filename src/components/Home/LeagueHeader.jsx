import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { fetchLeagueInfo } from "../../features/clubs"
import { LeagueHeaderLoader } from "../loaders"

const LeagueHeader = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    league: {
      loading,
      data: { name, badge, country },
    },
  } = useSelector((state) => state.clubs)

  // Fetch League Info
  useEffect(() => {
    if (id) {
      dispatch(fetchLeagueInfo({ activeLeague: id }))
    }
  }, [id, dispatch])

  if (loading) return <LeagueHeaderLoader />

  return (
    <div className="container rounded-lg">
      <section
        id="league-header"
        className="relative py-12 md:py-24 bg-[#1a1a1a] rounded-lg"
      >
        <div className="container flex items-start">
          <div className="flex pl-3">
            <img
              src={badge}
              className="w-[75px] h-[75px] mr-4 md:mr-6"
              alt=""
            />

            <div className="translate-y-[-5px]">
              <h1 className="text-2xl sm:text-5xl font-bold mb-1 md:mb-3">
                {name}
              </h1>
              <p className="text-lg sm:text-2xl">{country}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LeagueHeader

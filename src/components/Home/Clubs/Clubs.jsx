import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import ClubItem from "./ClubItem"
import { ClubCardLoader } from "../../loaders"
import { fetchClubs } from "../../../features/clubs"

const Clubs = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    clubs: { loading, data },
  } = useSelector((state) => state.clubs)

  // Fetch Clubs
  useEffect(() => {
    if (id) {
      dispatch(fetchClubs({ activeLeague: id }))
    }
  }, [id, dispatch])

  return (
    <section id="clubs-section" className="container">
      {loading ? (
        <ClubCardLoader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(206px,1fr))] gap-3 items-stretch">
          {data.map((club) => (
            <ClubItem key={club.id} {...club} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Clubs

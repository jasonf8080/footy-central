import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import defaultPlayer from "../../public/images/defaultPlayer.png"
import { formatName } from "../utils/helpers"

const RosterItem = ({
  id,
  name,
  position,
  number,
  image,
}) => {
  const navigate = useNavigate()
  const rosterCardRef = useRef(null)
  const [formattedName, setFormattedName] = useState([])

  const handleNavigate = () => {
    navigate(`/player/${id}/about`)
  }

  // Lazy-load player image when card enters viewport
  useEffect(() => {
    const target = rosterCardRef.current
    if (!target) return

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardLoader = entry.target.children[0]
          const cardImage = entry.target.children[3]

          const realSrc = cardImage.getAttribute("data-src")
          cardLoader.style.display = "none"
          cardImage.src = realSrc
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (name) {
      setFormattedName(formatName(name))
    }
  }, [name])

  return (
    <article
      ref={rosterCardRef}
      onClick={handleNavigate}
      className="roster-card cursor-pointer fade-gradient flex flex-col shadow-md rounded-lg relative"
    >
      {/* Skeleton loader */}
      <div className="absolute top-0 left-0 min-w-full min-h-full skeleton-loader z-10 rounded-lg" />

      {/* Text content */}
      <div className="py-4 px-6">
        <h3 className="font-bold text-sm md:text-xl uppercase">
          {formattedName[1]}
          {formattedName[2] && `-${formattedName[2]}`}
        </h3>

        <h3
          className={
            !formattedName[1]
              ? "text-sm md:text-xl uppercase font-bold"
              : "text-sm md:text-lg"
          }
        >
          {formattedName[0]}
        </h3>

        <p className="hidden md:block capitalize">
          {position}
        </p>
      </div>

      {/* Jersey number */}
      <h1 className="hidden md:block number text-7xl absolute top-2 right-4 font-bold">
        {number}
      </h1>

      {/* Player image */}
      <img
        src={defaultPlayer}
        data-src={image || defaultPlayer}
        alt={name}
        className="w-full h-full pt-2 pr-1 mr-3 rounded-t-lg"
      />
    </article>
  )
}

export default RosterItem

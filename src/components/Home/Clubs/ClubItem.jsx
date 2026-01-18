import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { styleElement, testBrightness } from "../../../utils/helpers"

const ClubItem = ({ logo, name, id, color }) => {
  const card = useRef(null)
  const textEl = useRef(null)

  // Handle color hover based on club color
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (value, color) => {
    const isWhite = testBrightness(color)
    setIsHovered(value)

    if (!isHovered) {
      // Card is hovered
      styleElement(card.current, "background", color, false)
      styleElement(
        textEl.current,
        "color",
        isWhite ? "#111" : "#fff",
        false
      )
    } else {
      // Card is unhovered
      styleElement(card.current, "background", "#1e1e1e", false)
      styleElement(textEl.current, "color", "#fff", false)
    }
  }

  return (
    <Link to={`/team/${id}/schedule`}>
      <article
        ref={card}
        onMouseEnter={() => handleHover(true, color)}
        onMouseLeave={() => handleHover(false, color)}
        className="card-style p-5 flex flex-col items-center rounded-xl transition-all duration-200 h-full w-full"
      >
        <img
          className="max-w-[65%] mx-auto"
          src={logo}
          alt={name}
        />

        <div
          ref={textEl}
          className="text-text-color text-center pl-1 pt-1 mt-3"
        >
          <h3 className="text-xs md:text-lg">{name}</h3>
        </div>
      </article>
    </Link>
  )
}

export default ClubItem

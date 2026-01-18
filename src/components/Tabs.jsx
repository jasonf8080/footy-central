import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const Tabs = ({ tabData }) => {
  return (
    <div className="container">
      <div className="flex">
        {tabData.map((item) => (
          <TabButton
            key={item.link}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>

      <div className="underline" />
    </div>
  )
}

/* Tab Button */
const TabButton = ({ name, link }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Get last segment of the URL
  const getFinalRoute = () => {
    const finalRoute = location.pathname.split("/").pop()

    // Special case: clubs tab when route ends in league ID
    if (name === "clubs" && !isNaN(Number(finalRoute))) {
      return "clubs"
    }

    return finalRoute
  }

  // Re-run on route change (keeps active state correct)
  useEffect(() => {}, [location.pathname])

  const isActive = name === getFinalRoute()

  return (
    <button
      onClick={() =>
        navigate(link, {
          replace: true,
        })
      }
      className={`${
        isActive
          ? "bg-[#222] text-white rounded-t-md"
          : ""} px-6 py-3 text-text-color capitalize text-sm sm:text-lg font-semibold`}
    >
      {name}
    </button>
  )
}

export default Tabs

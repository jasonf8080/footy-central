import { createArray } from "../../utils/helpers"

const StandingLoader = () => {
  const loaderArray = createArray(20)

  return (
    <div className="standings-container">
      {loaderArray.map((item) => (
        <div
          key={item}
          className="skeleton-loader w-full h-[60px] mb-1"
        />
      ))}
    </div>
  )
}

export default StandingLoader

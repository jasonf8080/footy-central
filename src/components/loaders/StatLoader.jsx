import { createArray } from "../../utils/helpers"

const StatLoader = () => {
  const loaderArray = createArray(20)

  return (
    <div className="standings-container">
      {loaderArray.map((item) => (
        <article
          key={item}
          className="skeleton-loader h-[60px] min-w-full mb-1"
        />
      ))}
    </div>
  )
}

export default StatLoader

import { createArray } from "../../utils/helpers"

const PlayerDescriptionLoader = () => {
  const loaderArray = createArray(10)

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col gap-3">
      {loaderArray.map((item) => (
        <article
          key={item}
          className="skeleton-loader h-[20px] w-full"
        />
      ))}
    </div>
  )
}

export default PlayerDescriptionLoader

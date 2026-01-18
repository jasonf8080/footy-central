import { createArray } from "../../utils/helpers"

const PlayerClubsLoader = () => {
  const loaderArray = createArray(5)

  return (
    <>
      {loaderArray.map((item) => (
        <article
          key={item}
          className="flex justify-between h-[50px] mb-2 skeleton-loader"
        />
      ))}
    </>
  )
}

export default PlayerClubsLoader

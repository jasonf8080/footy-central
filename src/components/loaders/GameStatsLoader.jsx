import { createArray } from "../../utils/helpers"

const GameStatsLoader = () => {
  const loaderArray = createArray(15)

  return (
    <>
      <article className="h-[60px] md:h-[80px] bg-[#1a1a1a]" />

      {loaderArray.map((item) => (
        <div
          key={item}
          className="bg-[#1a1a1a] h-[60px] md:h-[100px] flex items-center justify-center w-full"
        >
          <div className="h-8 w-[90%] mx-auto skeleton-loader" />
        </div>
      ))}
    </>
  )
}

export default GameStatsLoader

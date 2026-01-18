import { createArray } from "../../utils/helpers"

const LineupLoader = () => {
  const loaderArray = createArray(11)

  return (
    <div className="min-w-full -bg--dark-1 rounded-lg">
      <div className="shadow-xl px-8 py-4 mb-1 border-b-1 rounded-t-lg h-[90px]" />

      <div>
        {loaderArray.map((item) => (
          <div
            key={item}
            className="bg-[#1a1a1a] h-[60px] md:h-[80px] flex items-center justify-center w-full"
          >
            <article className="h-[50px] skeleton-loader mb-1 w-[90%] mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineupLoader

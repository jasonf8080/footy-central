import { createArray } from "../../utils/helpers"

const EventsLoader = () => {
  const loadingArray = createArray(10)

  return (
    <>
      <div className="shadow-xl px-8 py-4 mb-1 border-b-1 rounded-t-lg h-[90px]" />

      {loadingArray.map((item) => (
        <div
          key={item}
          className="bg-[#1a1a1a] h-[60px] md:h-[80px] flex items-center justify-center w-full"
        >
          <article className="h-[50px] skeleton-loader mb-0 w-[90%] mx-auto" />
        </div>
      ))}
    </>
  )
}

export default EventsLoader

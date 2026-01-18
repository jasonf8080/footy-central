import { createArray } from "../../utils/helpers"

const ClubCardLoader = () => {
  const loaderArray = createArray(20)

  return (
    <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(206px,1fr))] gap-3 items-stretch">
      {loaderArray.map((item) => (
        <div
          key={item}
          className="skeleton-loader w-full h-[130px] md:h-[160px]"
        />
      ))}
    </div>
  )
}

export default ClubCardLoader

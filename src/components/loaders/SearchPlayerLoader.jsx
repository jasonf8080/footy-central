import { createArray } from "../../utils/helpers"

const SearchPlayerLoader = () => {
  const loadingArray = createArray(6)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5 max-w-full">
      {loadingArray.map((item) => (
        <article
          key={item}
          className="h-[430px] rounded-lg skeleton-loader"
        />
      ))}
    </div>
  )
}

export default SearchPlayerLoader

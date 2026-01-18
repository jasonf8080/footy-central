import { createArray } from "../../utils/helpers"

const TeamScheduleLoader = () => {
  const loaderArray = createArray(5)

  return (
    <div>
      {loaderArray.map((item) => (
        <article
          key={item}
          className="h-[60px] mb-1 skeleton-loader w-full"
        />
      ))}
    </div>
  )
}

export default TeamScheduleLoader

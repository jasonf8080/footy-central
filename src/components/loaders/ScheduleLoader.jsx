import { createArray } from "../../utils/helpers"

const ScheduleLoader = () => {
  const loaderArray = createArray(15)

  return (
    <div className="flex max-w-full overflow-scroll pb-4 hide-scroll">
      {loaderArray.map((item) => (
        <div
          key={item}
          className="min-w-[160px] h-[70px] bg-red mr-4 p-5 shadow-lg rounded-md skeleton-loader"
        />
      ))}
    </div>
  )
}

export default ScheduleLoader

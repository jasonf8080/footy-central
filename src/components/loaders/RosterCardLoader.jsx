import { createArray } from "../../utils/helpers"

// ✅ Vite-friendly public asset path
const defaultPlayer = "/images/defaultPlayer.png"

const RosterCardLoader = () => {
  const loaderArray = createArray(4)

  return (
    <div className="container">
      <div className="mb-20">
        <h2 className="section-heading capitalize pl-6 mt-8">
          Goalkeepers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-full">
          {loaderArray.map((item) => (
            <article
              key={item}
              className="relative min-h-[350px] skeleton-loader roster-card fade-gradient flex flex-col shadow-md rounded-lg"
            >
              <img
                src={defaultPlayer}
                className="absolute bottom-0 opacity-0 left-1/2 -translate-x-1/2 w-full h-full pt-2 pr-1 mr-3 rounded-t-lg"
                alt="Player"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RosterCardLoader
